var txtUser = document.getElementById("txtUser");
var txtPwd = document.getElementById("txtPwd");
var btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click", function () {
    var usuario = {user:txtUser.value, pwd:txtPwd.value};
    if (typeof (Storage) !== "undefined") {
        window.localStorage.setItem("user",JSON.stringify(usuario)) // converte o objeto "usuario" em string.
        alert("Cadastrado com sucesso")
    }
    else {
        alert("Atualize o seu navegador. Não é possível cadastrar");
    }

});