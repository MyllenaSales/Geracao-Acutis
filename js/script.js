const track = document.querySelector('#track');
const slides = Array.from(track.children);
const dots = Array.from(document.querySelector('#dots').children);
let atual = 0;

function irPara(index) {
    slides[atual].classList.remove('ativo');
    dots[atual].classList.remove('ativo');

    atual = (index + slides.length) % slides.length; slides[atual].classList.add('ativo');
    dots[atual].classList.add('ativo'); track.style.transform = `translateX(-${atual * 100}%)`;
}

document.querySelector('#next').addEventListener('click', () => irPara(atual + 1));
document.querySelector('#prev').addEventListener('click', () => irPara(atual - 1));
dots.map(dot => {
    dot.addEventListener('click', () => irPara(Number(dot.dataset.index)));
});
setInterval(() => irPara(atual + 1), 6000);