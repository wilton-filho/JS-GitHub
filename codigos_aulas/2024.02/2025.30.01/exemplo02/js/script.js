window.addEventListener("DOMContentLoaded",function () {
    const box = document.getElementById("box");
    const boxColor = {in:"green", out:"pink"}

    box.addEventListener("mouseenter", function () {
        trocarClasse("sair","entrar");
    })
    box.addEventListener("mouseout", function () {
        trocarClasse("entrar","sair");
    })

    function trocarClasse(antiga, nova) {
        // Replace só pode ser utilizada, pois a classe "sair" estava aplicada inicialmente
        box.classList.replace(antiga, nova); 
        // box.classList.remove(antiga);
        // box.classList.add(nova);
    }
})