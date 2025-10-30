window.addEventListener("DOMContentLoaded", function () {

    //CARTA 1
    let imagem1 = new Image();
    imagem1.src = "img/verso.png";
    imagem1.dataset.urlCarta = "img/carta1.png";
    imagem1.addEventListener("click", function (event) {
        revelarCarta(event);
    });

    document.getElementById("tabuleiro").appendChild(imagem1);

    // CARTA 2
    let imagem2 = new Image();
    imagem2.src = "img/verso.png";
    imagem2.dataset.urlCarta = "img/carta2.png";
    imagem2.addEventListener("click", function (event) {
        revelarCarta(event);
    });

    document.getElementById("tabuleiro").appendChild(imagem2);

    function revelarCarta(event) {
        event.target.src = event.target.dataset.urlCarta;
    }

})