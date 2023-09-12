btn = document.getElementById("btnTeste")

function exibirMsg1() {
    alert("Clicou");
}
function exibirMsg2() {
    alert("Passou o mouse");
}
function exibirMsg3() {
    alert("Retirou o mouse");
}

btn.onclick = exibirMsg1;
btn.onmouseover = exibirMsg2;
btn.onmouseout = exibirMsg3;