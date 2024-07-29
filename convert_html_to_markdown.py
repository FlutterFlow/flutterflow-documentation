from bs4 import BeautifulSoup
import requests
import markdownify

def html_to_markdown(url, output_file):
    response = requests.get(url)
    html_content = response.text

    # Parse the HTML content using Beautiful Soup
    soup = BeautifulSoup(html_content, 'html.parser')

    # Convert HTML to Markdown
    markdown_text = markdownify.markdownify(str(soup), heading_style="ATX")

    # Save to a Markdown file
    with open(output_file, 'w') as file:
        file.write(markdown_text)

# URL of the page you want to convert
url = 'https://docs.flutterflow.io/marketplace/adding-and-purchasing-items'

# Output filename
output_file = 'output.md'

# Perform conversion and save to file
html_to_markdown(url, output_file)