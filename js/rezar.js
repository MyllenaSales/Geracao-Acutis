const parametrosUrl = new URLSearchParams(window.location.search);
const misterioKey = parametrosUrl.get('misterio');

const titulosMisterios = new Map([
    ['gozosos', 'Mistérios Gozosos'],
    ['luminosos', 'Mistérios Luminosos'],
    ['dolorosos', 'Mistérios Dolorosos'],
    ['gloriosos', 'Mistérios Gloriosos']
]);

if (misterioKey && titulosMisterios.has(misterioKey)) {
    document.querySelector('#tituloMisterio').textContent = titulosMisterios.get(misterioKey);
    
    const misterioFormatado = misterioKey.charAt(0).toUpperCase() + misterioKey.slice(1);
    
    const containerVideo = document.querySelector(`#video${misterioFormatado}`);
    if (containerVideo) {
        containerVideo.style.display = 'block';
    }
}