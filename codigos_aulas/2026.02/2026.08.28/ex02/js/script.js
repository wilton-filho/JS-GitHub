btn = document.getElementById("btnTestar");

btn.addEventListener("click", function () {
    exibirMsg("Oi, sou um robô");
});
btn.addEventListener("mouseout",function () {
    exibirMsg("Até logo!")
});
btn.addEventListener("mousemove",function () {
    exibirMsg("Pare de faz..")
});

function exibirMsg(msg) {
    alert(msg);
}