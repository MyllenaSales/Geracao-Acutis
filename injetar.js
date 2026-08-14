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

htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    if (!content.includes('<nav class="navegacao">')) return;

    const match = content.match(/([\t ]*)<nav class="navegacao">/);
    const indent = match ? match[1] : '';

    const buttonHtml = `${indent}<button class="menuToggle" id="menuToggle" aria-label="Abrir menu" aria-expanded="false" type="button">\r\n${indent}    <span></span>\r\n${indent}    <span></span>\r\n${indent}    <span></span>\r\n${indent}</button>\r\n`;

    content = content.replace('<nav class="navegacao">', buttonHtml + indent + '<nav class="navegacao" id="navegacao">');

    if (!content.includes('/js/nav.js')) {
        content = content.replace('</body>', '    <script src="/js/nav.js"></script>\r\n</body>');
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`- Atualizado: ${path.relative(__dirname, file)}`);
    updatedCount++;
});

console.log(`\nSucesso! ${updatedCount} arquivos atualizados.`);