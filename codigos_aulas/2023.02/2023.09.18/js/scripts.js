// Acesso aos elementos da página
boy = document.getElementById("personagem");
paragrafo = document.getElementById("mensagem");

// Após o carregamento da página, carrega o personagem "pensativo" e sua respectiva mensagem
trocarPersonagem('pensativo','zzzzz!');

// Adiciona os eventos a imagem
boy.addEventListener("mouseover", function () {trocarPersonagem('assustado','O que você quer?')});
boy.addEventListener("mouseout", function () {trocarPersonagem('pensativo','zzzzz!')});
boy.addEventListener("click",pedirNome)

// Funções da página
function trocarPersonagem(tipo, msg) {
    boy.className = ""; // remove todas as classes CSS do personagem
    boy.src=`img/${tipo}.png`;
    paragrafo.innerHTML = msg;
}

function pedirNome() {
    nome = prompt("Qual é o seu nome?");
    if (!nome) trocarPersonagem('nervoso','Não me faça perder o meu tempo');
    else {
        trocarPersonagem('alegre',`${nome}, seja bem-vindo!`);
        boy.classList.add('alegre'); // adiciona a classe da animação
    }
}

