window.addEventListener("DOMContentLoaded", function () {

    var niveisDif = [4,8,12];
    var btnSelecionar = document.getElementById("btnSelecionar");
    var nivel = document.getElementById("nivel");
    btnSelecionar.addEventListener("click", exibirNivel);
    function exibirNivel() {

        if (nivel.selectedIndex == 0)
            alert("Selecione o nível de dificuldade para iniciar");
        else {
            // facil (nivel.selectedIndex = 1)
            // medio (nivel.selectedIndex = 2)
            // dificil (nivel.selectedIndex = 3)
            sorteaCartas(niveisDif[nivel.selectedIndex-1]);
        }
    }
})