var botao1 = document.getElementById("btn1");
var paragrafo = document.getElementById("txtNome");

function exibirMsg(msg) {
    alert(msg)
}

botao1.addEventListener("click",function () {
    var nome = prompt('Digite o seu nome:');
    paragrafo.innerHTML = nome;
});

botao1.addEventListener("mouseout",function () {
    exibirMsg("saiu");
})