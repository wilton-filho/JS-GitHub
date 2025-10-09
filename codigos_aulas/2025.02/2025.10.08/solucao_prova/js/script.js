paragrafo = document.getElementById("txtParagrafo");
imagem = document.getElementById("imgPersonagem");
txtPersonagem = document.getElementById("txtPersonagem");

document.getElementById("personagem01").addEventListener("click",mostrarMsgPers01);
document.getElementById("personagem02").addEventListener("click",mostrarMsgPers02);
document.getElementById("personagem03").addEventListener("click",mostrarMsgPers03);
document.getElementById("personagem04").addEventListener("click",mostrarMsgPers04);
document.getElementById("personagem05").addEventListener("click",mostrarMsgPers05);
document.getElementById("personagem06").addEventListener("mouseover",mostrarMsgPers06);

function mostrarMsgPers01() {
    if (txtPersonagem.value == "")
        alert("Favor preencher a caixa de textos");
    else  {
        paragrafo.innerHTML = txtPersonagem.value;
        imagem.src = "img/imagem01.png";
    }
}
function mostrarMsgPers02() {
    paragrafo.innerHTML = txtPersonagem.value.toUpperCase();
    imagem.src = "img/imagem02.png";
}
function mostrarMsgPers03() {
    paragrafo.innerHTML = txtPersonagem.value.split(" ")[0];
    imagem.src = "img/imagem03.png";
}
function mostrarMsgPers04() {
    paragrafo.innerHTML = parseInt(txtPersonagem.value) + 1;
    imagem.src = "img/imagem04.png";
}
function mostrarMsgPers05() {
    paragrafo.innerHTML = parseInt(paragrafo.innerHTML) + 1;
    imagem.src = "img/imagem05.png";
}
function mostrarMsgPers06() {
    var nome = prompt('Qual o seu nome?');
    var msg = nome + ", " + txtPersonagem.value;
    paragrafo.innerHTML = msg;
    alert(msg);
    imagem.src = "img/imagem06.png";
}

