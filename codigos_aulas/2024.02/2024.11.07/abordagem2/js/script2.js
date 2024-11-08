function exibirMsg(msg) {
    alert(msg)
}

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");

btn1.onclick = function () {
    exibirMsg("clicou em mim!");
}
btn1.onclick = function () {
    exibirMsg("clicou em mim 2!");
}
// btn2.onmouseenter = function () {
//     exibirMsg("passou o mouse");
// }