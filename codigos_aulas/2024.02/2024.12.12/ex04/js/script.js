window.addEventListener("DOMContentLoaded", function () {
    var nome1 = document.getElementById("txtNome1");
    var nome2 = document.getElementById("txtNome2");
    var btn = document.getElementById("btnExibir"); 
    var p = document.getElementById("paragrafo");

    btn.addEventListener("click", function () {
        setTimeout(copiarTxt, 2000);
    })

    function copiarTxt() {
        nome2.value = nome1.value;
        p.innerHTML = nome1.value;
    }
})