const fs = require('fs');
const path = require('path');
const glob = require('glob');

const markdownImageRegex = /!\[(.*?)\]\((.*?)\)/g;

function convertImageSyntax(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(markdownImageRegex, (match, alt, src) => {
        return `<img src="${src}" alt="${alt}"  />`; // Customize this string as needed
    });
    fs.writeFileSync(filePath, content, 'utf8');
}

glob("docs/**/*.md", (err, files) => {
    if (err) throw err;
    files.forEach(file => {
        convertImageSyntax(file);
    });
    console.log('Conversion complete.');
});