const fs = require('fs');

try {
    const lines = fs.readFileSync('index.html', 'utf8').split('\n');
    lines.forEach((line, i) => {
        if (line.includes('cardHome')) {
            console.log(`${i + 1}: ${line}`);
        }
    });
} catch (e) {
    console.log('Arquivo index.html não foi encontrado.');
}