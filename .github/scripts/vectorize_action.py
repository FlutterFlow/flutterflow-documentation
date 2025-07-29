# .github/scripts/vectorize_action.py
import sys
from pathlib import Path
from vectorize import process_single_file

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Please provide a file path to process.")
        sys.exit(1)

    file_path = Path(sys.argv[1])
    if file_path.exists():
        process_single_file(file_path)
    else:
        print(f"File not found: {file_path}")
        sys.exit(1)
