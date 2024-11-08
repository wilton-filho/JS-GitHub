function exibirMsg1() {
    alert("Mensagem 1!")
}
function exibirMsg2() {
    alert("Mensagem 2!")
}

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = exibirMsg1;
btn2.onmouseenter = exibirMsg2;