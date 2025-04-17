from langchain.text_splitter import RecursiveCharacterTextSplitter
from pathlib import Path
import google.generativeai as genai
from google.generativeai import embed_content
from google.cloud import bigquery
import hashlib
import time
import random
from google.api_core.exceptions import ResourceExhausted, GoogleAPIError
import os 
from dotenv import load_dotenv

DOC_TABLES = {'doc_text', 'doc_text_vector'}
load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
bq_client = bigquery.Client()

def chunk_markdown_file(markdown_text, chunk_size=500, chunk_overlap=50):

    # Create the text splitter with the Chroma-recommended separators
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        separators=["\n\n", "\n", ".", "?", "!", " ", ""]
    )

    # Split the document into chunks
    chunks = text_splitter.split_text(markdown_text)

    return chunks

class Chunk: 
    def __init__(self, chunk_vector, chunk_text): 
        self.chunk_vector = chunk_vector
        self.chunk_text = chunk_text

def vectorize_chunk_with_retry(chunk, max_retries=5):
    model = 'models/gemini-embedding-exp-03-07'
    for attempt in range(max_retries):
        try:
            print(f"Embedding chunk (attempt {attempt + 1})...")
            response = embed_content(
                model=model,
                content=chunk,
                task_type="retrieval_document"
            )
            embedding = response["embedding"]
            return Chunk(embedding, chunk)
        except ResourceExhausted as e:
            wait = 2 ** attempt + random.uniform(0.5, 1.5)
            print(f"🚧 Rate limit hit (429). Retrying in {wait:.2f}s...")
            time.sleep(wait)
        except GoogleAPIError as e:
            print(f"🚨 Unexpected API error: {e}")
            raise e
    raise RuntimeError("❌ Max retries exceeded for Gemini embedding.")


def vectorize_chunk(chunk): 
    model = 'models/gemini-embedding-exp-03-07'
    response = embed_content(
        model=model,
        content=chunk,
        task_type="retrieval_document"  # use "retrieval_query" for queries
    )
    embedding = response["embedding"]
    return Chunk(embedding, chunk)

def compute_file_hash(file_path): 
    content = file_path.read_bytes()
    return hashlib.sha256(content).hexdigest()

def write_to_bq_doc_text(file_hash, content): 
    bq_client = bigquery.Client()
    table = bq_client.get_table("flutterflow-io-6f20.documentation.doc_text")
    errors =bq_client.insert_rows(table, [{"doc_id": file_hash, "doc_text": content}])
    if errors: 
        print(f"Encountered errors while inserting rows: {errors}")
    else: 
        print("Successfully inserted rows into bigquery")

def file_already_uploaded(table, file_hash):
    if table not in DOC_TABLES: 
        raise ValueError(f"Invalid table: {table}")
    dataset_table = f"flutterflow-io-6f20.documentation.{table}"
    query = f"""
        SELECT COUNT(*) as count
        FROM `{dataset_table}`
        WHERE doc_id = @file_hash
    """
    job_config = bigquery.QueryJobConfig(
        query_parameters=[
            bigquery.ScalarQueryParameter("file_hash", "STRING", file_hash),
        ]
    )
    result = bq_client.query(query, job_config=job_config).result()
    return next(result).count > 0

def batch_write_to_bq(table, rows, batch_size=10):
    for i in range(0, len(rows), batch_size):
        batch = rows[i:i+batch_size]
        errors = bq_client.insert_rows(table, batch)
        if errors:
            print(f"Errors inserting batch {i//batch_size}: {errors}")
        else:
            print(f"Successfully inserted batch {i//batch_size}")

def write_to_bq_doc_text_vector(file_hash, content, chunks): 
    bq_client = bigquery.Client()
    table_id = "flutterflow-io-6f20.documentation.doc_text_vector"

    # Step 1: Delete existing rows for the doc_id (now safe since we're not using streaming)
    delete_query = f"""
        DELETE FROM `{table_id}`
        WHERE doc_id = @file_hash
    """
    job_config = bigquery.QueryJobConfig(
        query_parameters=[
            bigquery.ScalarQueryParameter("file_hash", "STRING", file_hash)
        ]
    )
    bq_client.query(delete_query, job_config=job_config).result()

    # Step 2: Generate vectorized rows
    to_insert = []
    for i, chunk_text in enumerate(chunks): 
        chunk = vectorize_chunk(chunk_text)
        row = {
            "doc_id": file_hash,
            "chunk_id": i,
            "vectorized_chunk": chunk.chunk_vector,
            "text": chunk.chunk_text
        }
        to_insert.append(row)

    # Step 3: Batch insert via load_table_from_json
    job = bq_client.load_table_from_json(
        to_insert,
        table_id,
        job_config=bigquery.LoadJobConfig(
            write_disposition="WRITE_APPEND",  # Append instead of overwrite
            source_format=bigquery.SourceFormat.NEWLINE_DELIMITED_JSON
        )
    )
    job.result()
    print(f"Inserted {len(to_insert)} rows into {table_id}")


def backfill(): 
    current_file = Path(__file__).resolve()

    # Navigate to project root: `.github/scripts/` → project root → `docs/`
    project_root = current_file.parents[2]
    docs_dir = project_root / 'docs'
    for file_path in docs_dir.rglob("*.md"): 
        file_hash = compute_file_hash(file_path)
        with open(file_path, 'r', encoding='utf-8') as file:
            markdown_text = file.read()
            if not file_already_uploaded('doc_text', file_hash): 
                write_to_bq_doc_text(file_hash, markdown_text)
            chunks = chunk_markdown_file(markdown_text)
            if not file_already_uploaded('doc_text_vector', file_hash): 
                write_to_bq_doc_text_vector(file_hash, markdown_text, chunks)
            else: 
                print(f"Skipping {file_path} because it already exists in BigQuery")
    print("Finished vectorizing all files")

def process_single_file(file_path: Path):
    file_hash = compute_file_hash(file_path)
    with open(file_path, 'r', encoding='utf-8') as file:
        markdown_text = file.read()
        chunks = chunk_markdown_file(markdown_text)
        if not file_already_uploaded('doc_text', file_hash): 
            write_to_bq_doc_text(file_hash, markdown_text)
        if not file_already_uploaded('doc_text_vector', file_hash): 
            write_to_bq_doc_text_vector(file_hash, markdown_text, chunks)
        else: 
            print(f"Skipping {file_path} because it already exists in BigQuery")

backfill()
            

        
