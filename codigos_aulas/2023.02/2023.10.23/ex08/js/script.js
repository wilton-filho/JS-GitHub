window.addEventListener("load", function () {

    function exibirPersonagem(boyAtual, boyFinal) {
        document.getElementById("imgBoy").src = `img/boy0${boyAtual}.png`;
        if (boyAtual < boyFinal) boyAtual++;
        else boyAtual = 1;
        setTimeout(exibirPersonagem, 1000, boyAtual, boyFinal);
    }

    setTimeout(exibirPersonagem, 1000, 1, 4);
    
});