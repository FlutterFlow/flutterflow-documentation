const fs = require('fs-extra');
const glob = require('glob');
const util = require('util');

const globPromise = util.promisify(glob);

async function convertMarkdownLinks() {
    const files = await globPromise("docs/**/*.md"); // Adjust this path to wherever your markdown files are located

    for (const file of files) {
        let content = await fs.readFile(file, 'utf8');

        content = content.replace(/!\[\]\((https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+))\)/g, (_, url, id) =>
            `<iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ width: '100%', height: '300px' }}></iframe>`
        );

        content = content.replace(/!\[\]\((https:\/\/www\.loom.com\/share\/([a-zA-Z0-9_-]+))\)/g, (_, url, id) =>
            `<iframe src="https://www.loom.com/embed/${id}" frameborder="0" allowFullScreen style={{ width: '100%', height: '300px' }}></iframe>`
        );

        await fs.writeFile(file, content, 'utf8');
        console.log(`Updated ${file}`);
    }
}

convertMarkdownLinks().catch(console.error);