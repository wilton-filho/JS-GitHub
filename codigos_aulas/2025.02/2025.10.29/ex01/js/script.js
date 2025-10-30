import { cadastrarUsusuario, fazerLogin } from "./storage.js";

window.addEventListener("DOMContentLoaded", function () {

    const CHAVE = "usuarios";

    let btnCadastrar = document.getElementById("btnCadastrar");
    let btnLogar = document.getElementById("btnLogar");

    btnCadastrar.addEventListener("click", function () {
        const novoUsuario = {
            usuario: document.getElementById("username").value,
            senha: document.getElementById("pwd").value
        }
        cadastrarUsusuario(CHAVE, novoUsuario);
    });

    btnLogar.addEventListener("click", function () {
        const userInterface = {
            usuario: document.getElementById("username").value,
            senha: document.getElementById("pwd").value
        }
        if (fazerLogin(CHAVE, userInterface))
            alert("Usuário existente")
        else alert("Usuario inexistente!!!");
    });

});