window.addEventListener("load", function () {

    document.getElementById("btnMostrar").addEventListener("click", iniciarCronometro);

    function iniciarCronometro() {
        setTimeout(exibirMsg, 1000);
    }

    function exibirMsg() {
        document.getElementById("nome").innerHTML = parseInt(Math.random()*10)+1;
    }

});