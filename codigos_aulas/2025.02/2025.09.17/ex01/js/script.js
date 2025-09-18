btn = document.getElementById("btnEnviar");

btn.addEventListener("click",exibirMsgClick);
btn.addEventListener("mouseenter",exibirMsgMouseEnter);
btn.addEventListener("mouseout",exibirMsgMouseOut);
btn.addEventListener("mousemove",exibirMsgMouseMove);

function exibirMsgClick() {
    alert("Você clicou em mim!");
}   
function exibirMsgMouseEnter() {
    alert("Chegou, hein!");
}
function exibirMsgMouseOut() {
    alert("Até logo!");
}
function exibirMsgMouseMove() {
    alert("Para de provocaaaar!");
}

