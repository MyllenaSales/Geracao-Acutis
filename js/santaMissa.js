document.addEventListener("DOMContentLoaded", () => {
    const abasOracao = Array.from(document.querySelectorAll(".abaOracao"));
    const conteudosOracao = Array.from(document.querySelectorAll(".oracaoConteudo"));
    abasOracao.map(aba => {
        aba.addEventListener("click", () => {
            abasOracao.map(item => {
                item.classList.remove("ativa");
            });
            conteudosOracao.map(item => {
                item.classList.remove("ativo");
            });
            aba.classList.add("ativa");
            const idOracao = aba.dataset.oracao;
            document
                .querySelector(`#${idOracao}`)
                .classList.add("ativo");
        });
    });
});