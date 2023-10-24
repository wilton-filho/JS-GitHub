window.addEventListener("load", function () {
    
    document.getElementById("btnMostrar").addEventListener("click",exibirNome);

    function exibirNome() {
        document.getElementById("nome").innerHTML = "Wilton";
    }

});
