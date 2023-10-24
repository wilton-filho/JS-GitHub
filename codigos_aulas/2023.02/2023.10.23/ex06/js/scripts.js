window.addEventListener("load", function () {

    document.getElementById("btnPlay").addEventListener("click", iniciarCronometro);
    document.getElementById("btnPause").addEventListener("click", pararCronometro);

    var cronNrosAleatorios;

    function iniciarCronometro() {
        controlarBtns(true, false);
        cronNrosAleatorios = setInterval(exibirMsg, 500);
    }

    function pararCronometro() {
        controlarBtns(false, true);
        clearInterval(cronNrosAleatorios)
    }

    function exibirMsg() {
        document.getElementById("nome").innerHTML = parseInt(Math.random()*1000)+1;
    }

    function controlarBtns(play, pause) {
        document.getElementById("btnPlay").disabled = play;
        document.getElementById("btnPause").disabled = pause;
    }

    controlarBtns(false, true);
});