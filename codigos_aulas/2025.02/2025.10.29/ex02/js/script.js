import {cadastrarUser, consultarUser} from './storage.js';

window.addEventListener("DOMContentLoaded", function () {

    let btnCadastrar = document.getElementById("btnCadastrar");
    let btnEntrar = document.getElementById("btnEntrar");
    let user = document.getElementById("usr");
    let pwd = document.getElementById("pwd");
    const CHAVE = "usuarios";

    // Botao cadastrar
    btnCadastrar.addEventListener("click", function () {
        cadastrarUser(CHAVE, {usuario: user.value, senha: pwd.value});
    });

    // Botao entrar (login)
    btnEntrar.addEventListener("click", function () {
        if (consultarUser(CHAVE, {usuario: user.value, senha: pwd.value}))
            alert("Usuario existente");
        else
            alert("Usuario inexistente");
    });
})