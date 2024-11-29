// Interface visitante.html
var imgEmoji = document.getElementById("imgEmoji");
var btnClique1 = document.getElementById("btnClique1");
var btnColoqueMouse = document.getElementById("btnColoqueMouse");
var btnColoqueTireMouse = document.getElementById("btnColoqueTireMouse");
var btnClique2 = document.getElementById("btnClique2");
var txtNome = document.getElementById("txtNome");
var nomeUser = document.getElementById("nomeUser");

function mudarImagem(id) {
    nomeUser.innerHTML = (txtNome.value == "")?"visitante":txtNome.value;
    imgEmoji.src=`img/${id}.jpg`;
}

btnClique1.addEventListener("click", function () {
    mudarImagem("emoji1");
})

btnColoqueMouse.addEventListener("mouseenter", function () {
    mudarImagem("emoji2");
})

btnColoqueTireMouse.addEventListener("mouseleave", function () {
    mudarImagem("emoji3");
})

btnClique2.addEventListener("click", function () {
    var nroAleatorio = parseInt(Math.random()*4)+1
    mudarImagem(`emoji${nroAleatorio}`);
})
