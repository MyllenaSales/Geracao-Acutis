const fs = require('fs');
const path = require('path');

function getFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (file !== 'node_modules' && file !== '.git') {
                getFiles(filePath, fileList);
            }
        } else if (file.endsWith('.html')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

const htmlFiles = getFiles(__dirname);
let updatedCount = 0;

htmlFiles.forEach(f => {
    let buffer = fs.readFileSync(f);
    let contentStr = buffer.toString('utf8');

    const crlfCount = (buffer.toString().match(/\r\n/g) || []).length;
    const lfCount = (buffer.toString().match(/\n/g) || []).length;
    const usesCrlf = crlfCount > lfCount / 2;
    const eol = usesCrlf ? '\r\n' : '\n';

    const regex = /([\t ]*)<button class="menuToggle".*?<\/button>\r?\n[\t ]*<nav class="navegacao"[^>]*>/s;

    if (regex.test(contentStr)) {
        contentStr = contentStr.replace(regex, (match, indent) => {
            return `${indent}<button class="menuToggle" id="menuToggle" aria-label="Abrir menu" aria-expanded="false" type="button">${eol}` +
                   `${indent}    <span></span>${eol}` +
                   `${indent}    <span></span>${eol}` +
                   `${indent}    <span></span>${eol}` +
                   `${indent}</button>${eol}` +
                   `${indent}<nav class="navegacao" id="navegacao">`;
        });
    }

    contentStr = contentStr.replace(/<script src="\/js\/nav\.js"><\/script>\r?\n/g, `<script src="/js/nav.js"></script>${eol}`);

    fs.writeFileSync(f, contentStr, 'utf8');
    console.log(`- Corrigido: ${path.relative(__dirname, f)}`);
    updatedCount++;
});

console.log(`\nSucesso! ${updatedCount} arquivos formatados.`);