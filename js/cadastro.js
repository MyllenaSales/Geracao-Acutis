const formulario = document.querySelector("#formCadastro");
const senha = document.querySelector("#cadSenha");
const confirmarSenha = document.querySelector("#cadConfirmarSenha");
btnCadastrar.addEventListener("click", (event) => {
    event.preventDefault();
    if (!formulario.checkValidity()) {
        formulario.reportValidity();
        return;
    }
    if (senha.value !== confirmarSenha.value) {
        alert("As senhas não coincidem!");
        return;
    } else {
        window.location.href = "../perfil.html";
    }
});