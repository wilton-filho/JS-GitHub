paragrafo = document.getElementById("paragrafo");

paragrafo.addEventListener("click",function () {
    mudarCor("blue", "gray");
});
paragrafo.addEventListener("mouseout",function () {
    mudarCor("", "");
});
// paragrafo.addEventListener("mouseout",restaurarCor);

function mudarCor(corTexto, corFundo) {
    paragrafo.style.color = corTexto;
    paragrafo.style.backgroundColor = corFundo;
}

// function restaurarCor() {
//     paragrafo.style.color = "";
//     paragrafo.style.backgroundColor = "";
// }