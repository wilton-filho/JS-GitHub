var txtUser = document.getElementById("txtUser");
var txtPwd = document.getElementById("txtPwd");
var msgErro = document.getElementById("msgErro");

var usuario = window.localStorage.getItem("user");

if (usuario != null) {
    usuario = JSON.parse(usuario); // converte uma string num objeto
    txtUser.innerHTML = usuario.user;
    txtPwd.innerHTML = usuario.pwd;
}
else document.getElementById("msgErro").innerHTML = "Não há usuários cadastrados"

