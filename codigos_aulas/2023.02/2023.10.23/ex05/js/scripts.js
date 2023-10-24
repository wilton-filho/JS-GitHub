window.addEventListener("load", function () {

    document.getElementById("btnPlay").addEventListener("click", iniciarCronometro);
    document.getElementById("btnPause").addEventListener("click", pararCronometro);

    var cronNrosAleatorios;

    function iniciarCronometro() {
        cronNrosAleatorios = setInterval(exibirMsg, 500);
    }

    function pararCronometro() {
        clearInterval(cronNrosAleatorios)
    }

    function exibirMsg() {
        document.getElementById("nome").innerHTML = parseInt(Math.random()*1000)+1;
    }

});