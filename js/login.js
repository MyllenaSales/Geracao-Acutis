const formLogin = document.querySelector("#formLogin");
const logar = document.querySelector("#btnLogin");
logar.addEventListener("click", (event) => {

    event.preventDefault();

    if (formLogin.checkValidity()) {
        window.location.href = "../perfil.html";
    } else {
        formLogin.reportValidity();
    }
});