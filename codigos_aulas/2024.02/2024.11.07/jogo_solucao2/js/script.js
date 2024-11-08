var boy = document.getElementById("boy");
var textBoy = document.getElementById("textBoy");
var personagem = {
    alegre: {img:"img/alegre.png", msg:", seja bem-vindo!"},
    assustado: {img:"img/assustado.png", msg:"O que você quer?"},
    nervoso: {img:"img/nervoso.png", msg:"Não me faça perder o meu tempo!!!"},
    pensativo: {img:"img/pensativo.png", msg:"zzzzzzz!"}
}

function changeBoy(personagem) {
    boy.src = personagem.img;
    textBoy.innerHTML = personagem.msg;
}

boy.addEventListener("mouseenter", function () {
    changeBoy(personagem.assustado);
})

boy.addEventListener("mouseout", function () {
    changeBoy(personagem.pensativo);
})

boy.addEventListener("click", function () {
    var nome = prompt("Qual é o seu nome?");
    if (!nome)
        changeBoy(personagem.nervoso)
    else {
        personagem.alegre.msg = nome + personagem.alegre.msg;
        changeBoy(personagem.alegre);
    }
})

// animacao em css -> keyframes