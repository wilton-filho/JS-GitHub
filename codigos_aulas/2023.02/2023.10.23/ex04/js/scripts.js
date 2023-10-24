window.addEventListener("load", function () {

    document.getElementById("btnMostrar").addEventListener("click", iniciarCronometro);

    function iniciarCronometro() {
        setInterval(exibirMsg, 500);
    }

    function exibirMsg() {
        document.getElementById("nome").innerHTML = parseInt(Math.random()*1000)+1;
    }

});