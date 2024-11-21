var nome = document.getElementById("txtNome");
var sobrenome = document.getElementById("txtSobrenome");
var nomeCompleto = document.getElementById("txtNomeCompleto");
var btnMostrar = document.getElementById("btnMostrar");

btnMostrar.addEventListener("click",function () {
    nomeCompleto.value = `${nome.value} ${sobrenome.value}`;
})