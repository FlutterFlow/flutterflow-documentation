const fs = require('fs');
const path = require('path');

const docsPath = path.join(__dirname, '..', 'docs');
const snippetsPath = path.join(__dirname, '..', 'snippets');

// Recursive function to process each file
function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath); // Recurse into subdirectories
    } else {
      processFile(fullPath); // Process markdown files
    }
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const snippetRegex = /<<(.+?)>>/g; // Matches <<snippet.md>>

  let match;
  while ((match = snippetRegex.exec(content))) {
    const snippetFile = path.join(snippetsPath, match[1]);
    if (fs.existsSync(snippetFile)) {
      const snippetContent = fs.readFileSync(snippetFile, 'utf8');
      content = content.replace(match[0], snippetContent);
    } else {
      console.warn(`Snippet file not found: ${snippetFile}`);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8'); // Write the processed content back
}

processDirectory(docsPath);