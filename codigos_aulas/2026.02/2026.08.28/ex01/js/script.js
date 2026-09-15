btn = document.getElementById("btnTestar");

btn.addEventListener("click",exibirMsg1);
btn.addEventListener("mouseout",exibirMsg2);
btn.addEventListener("mousemove",exibirMsg3);

function exibirMsg1() {
    alert("Olá, sou um robô!");
}

function exibirMsg2() {
    alert("Até logo!");
}

function exibirMsg3() {
    alert("Pare de fazer cócegas!");
}