btnCadastrar = document.getElementById("btnCadastar");
btnCadastrar.addEventListener("click", cadastrar);

function cadastrar() {
    localStorage.setItem("key_usuario",document.getElementById("txtUsername").value);
    localStorage.setItem("key_senha",document.getElementById("txtPwd").value);
    document.getElementById("msg").innerHTML = "Usuário cadastrado com sucesso";
}