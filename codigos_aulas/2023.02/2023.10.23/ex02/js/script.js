window.addEventListener("load", function () {
    
    document.getElementById("btnMostrar").addEventListener("click",iniciarCronometro);

    function iniciarCronometro() {
        setTimeout(exibirNome, 3000);
    }

    function exibirNome() {
        document.getElementById("nome").innerHTML = "Wilton";
    }

});
