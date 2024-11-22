var user = document.getElementById("txtUser");
var pwd = document.getElementById("txtPwd");
var btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click", function () {
    if (typeof (Storage) !== "undefined") {
        window.localStorage.setItem("user",user.value)
        window.localStorage.setItem("pwd",pwd.value)
        alert("Cadastrado com sucesso")
    }
    else {
        alert("Atualize o seu navegador. Não é possível cadastrar");
    }

});