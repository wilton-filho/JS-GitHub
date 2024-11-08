var boy = document.getElementById("boy");
var textBoy = document.getElementById("textBoy");

function changeBoy(source, texto) {
    boy.src = source;
    textBoy.innerHTML = texto;
}

boy.addEventListener("mouseenter", function () {
    changeBoy("img/assustado.png", "O que você quer?");
})

boy.addEventListener("mouseout", function () {
    changeBoy("img/pensativo.png", "zzzzzzz!");
})

boy.addEventListener("click", function () {
    var nome = prompt("Qual é o seu nome?");
    (!nome)?changeBoy("img/nervoso.png", `Não me faça perder o meu tempo!!!`):changeBoy("img/alegre.png", `${nome}, seja bem-vindo!`);
})

// animacao em css -> keyframes