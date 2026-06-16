fetch("../json/comunidades.json")
    .then(response => response.json())
    .then(arquivo => {
        const grid = document.querySelector(".gridComunidades");
        const comunidades = arquivo.map(comunidade => {
            return `
            <article class="cardComunidade">
                <img src="${comunidade.imagem}" class="imagemComunidade">
                <div class="infoComunidade">
                    <span class="tipoComunidade">${comunidade.tipo}</span>
                    <h3>${comunidade.nome}</h3>
                    <p>${comunidade.descricao}</p>
                    <a href="${comunidade.link}" class="btnEnviar">Saiba mais</a>
                </div>
            </article>
        `;
        });
        grid.innerHTML = comunidades.join('');
    })