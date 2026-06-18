document.addEventListener("DOMContentLoaded", () => {
    const abas = [...document.querySelectorAll(".aba")];
    const grupos = [...document.querySelectorAll(".misterioGrupo")];
    const diaSemanaTexto = document.getElementById("diaSemana");
    const btnRezar = document.getElementById("btnRezar");
    
    const diasPorGrupo = {
        gozosos: "Segunda e Sábado",
        luminosos: "Quinta-feira",
        dolorosos: "Terça e Sexta-feira",
        gloriosos: "Quarta e Domingo"
    };

    abas.map(aba => {
        aba.addEventListener("click", () => {
            const grupoAlvo = aba.getAttribute("data-grupo");
            abas.map(a => a.classList.remove("ativa"));
            aba.classList.add("ativa");
            grupos.map(grupo => {
                if (grupo.id === grupoAlvo) {
                    grupo.classList.add("ativo");
                    mostrarSlide(grupo, 0);
                } else {
                    grupo.classList.remove("ativo");
                }
            });
            if (diasPorGrupo[grupoAlvo]) {
                diaSemanaTexto.textContent = diasPorGrupo[grupoAlvo];
            }
            if (btnRezar) {
                btnRezar.setAttribute("href", `/pages/sections/rezar.html?misterio=${grupoAlvo}`);
            }
        });
    });

    const botoesNav = [...document.querySelectorAll(".misterioBtn")];
    botoesNav.map(botao => {
        botao.addEventListener("click", () => {
            const grupoId = botao.getAttribute("data-grupo");
            const direcao = parseInt(botao.getAttribute("data-direcao"), 10);
            const grupoElemento = document.getElementById(grupoId);

            if (!grupoElemento) return;

            const slides = [...grupoElemento.querySelectorAll(".misterioSlide")];
            let indiceAtivo = -1;

            slides.map((slide, index) => {
                if (slide.classList.contains("ativo")) {
                    indiceAtivo = index;
                }
            });

            let novoIndice = indiceAtivo + direcao;
            if (novoIndice >= slides.length) {
                novoIndice = 0;
            } else if (novoIndice < 0) {
                novoIndice = slides.length - 1;
            }
            mostrarSlide(grupoElemento, novoIndice);
        });
    });

    function mostrarSlide(grupoElemento, indiceAlvo) {
        const slides = [...grupoElemento.querySelectorAll(".misterioSlide")];
        slides.map((slide, index) => {
            if (index === indiceAlvo) {
                slide.classList.add("ativo");
            } else {
                slide.classList.remove("ativo");
            }
        });
    }
});