// Executa o script após o carregamento do DOM (Document Object Model) da página
window.addEventListener("DOMContentLoaded", function () {

    var btnPlay = document.getElementById("btnPlay");
    var btnPause = document.getElementById("btnPause");
    var btnStop = document.getElementById("btnStop");
    var contador = document.getElementById("contador");

    var cont = 0;
    var idCronometro1 = null;

    btnPlay.addEventListener("click", function () {
        idCronometro1 = setInterval(incrementar,1000)
    });
    btnPause.addEventListener("click",function() {
        clearInterval(idCronometro1);
    });
    btnStop.addEventListener("click",function() {
        clearInterval(idCronometro1);
        cont = 0;
        contador.innerHTML = cont;
    });

    function incrementar() {
        contador.innerHTML = ++cont;
    }

})