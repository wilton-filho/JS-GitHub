// Interface: index.html
var user = document.getElementById("user");
var pwd = document.getElementById("pwd");
var btnEntrar = document.getElementById("btnEntrar");

function validar() {
    if ((user.value == "") || (pwd.value == ""))
        alert("Informe usuário e senha");
    else if (user.value.toUpperCase() == "VISITANTE")
        window.open("visitante.html","_self");
    else window.open("construcao.html","_self");
}

btnEntrar.addEventListener("click",validar);