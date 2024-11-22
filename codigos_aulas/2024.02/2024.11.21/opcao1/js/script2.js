var user = document.getElementById("user");
var pwd = document.getElementById("pwd");
var msgErro = document.getElementById("msg");

var usuario = window.localStorage.getItem("user");
var senha = window.localStorage.getItem("pwd");

if ((usuario != null) && (senha != null)) {
    user.innerHTML = window.localStorage.getItem("user");
    pwd.innerHTML = window.localStorage.getItem("pwd");
}
else document.getElementById("msg").innerHTML = "Não há usuários cadastrados"

