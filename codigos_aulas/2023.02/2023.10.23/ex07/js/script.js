window.addEventListener("load", function () {

    var boyAtual = 1;

    function exibirPersonagem() {
        document.getElementById("imgBoy").src = `img/boy0${boyAtual}.png`;
        boyAtual++;
        if (boyAtual > 4) boyAtual = 1;
    }

    setInterval(exibirPersonagem, 1000);
    
});