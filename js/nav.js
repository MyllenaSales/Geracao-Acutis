document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navegacao');

    if (!toggle || !nav) return;

    const fecharMenu = () => {
        nav.classList.remove('aberta');
        toggle.classList.remove('aberto');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const aberto = nav.classList.toggle('aberta');
        toggle.classList.toggle('aberto', aberto);
        toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', fecharMenu);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) fecharMenu();
    });
});