const fs = require('fs');

console.log('=== Primeiras 35 linhas do index.html ===\n');
try {
    const indexLines = fs.readFileSync('index.html', 'utf8').split('\n');
    console.log(indexLines.slice(0, 35).join('\n'));

    console.log('\n--- Últimas 5 linhas do index.html ---');
    console.log(indexLines.slice(-5).join('\n'));
} catch (e) {
    console.log('index.html não encontrado no diretório atual.');
}

console.log('\n=== Primeiras 25 linhas do pages/perfil.html ===\n');
try {
    const perfilLines = fs.readFileSync('pages/perfil.html', 'utf8').split('\n');
    console.log(perfilLines.slice(0, 25).join('\n'));
} catch (e) {
    console.log('pages/perfil.html não encontrado.');
}