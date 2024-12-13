window.addEventListener("DOMContentLoaded", function () {
    var vetCelulares = [
        {img:"cel01.png", info:"Samsung"},
        {img:"cel02.png", info:"Motorola"},
        {img:"cel03.png", info:"Xiaomi"}
    ];
    var slideAtual = 0;
    var idCron = null;
    var slideShow = document.getElementById("slideShow");
    var info = document.getElementById("infoSlideShow");

    function mostrarImg() {
        slideShow.src=`img/${vetCelulares[slideAtual].img}`;
        info.innerHTML = vetCelulares[slideAtual].info;
        slideAtual++;
        if (slideAtual == 3) slideAtual = 0;
    }
    slideShow.addEventListener("mouseenter", function () {
        clearInterval(idCron);
    })
    slideShow.addEventListener("mouseleave", function () {
        idCron = setInterval(mostrarImg, 2000);
    })
    mostrarImg();
    idCron = setInterval(mostrarImg, 2000);
})