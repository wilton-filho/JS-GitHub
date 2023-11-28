window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", function () {
        // Passo 1: criar o elemento/tag p
        var p = document.createElement("p");
        // Passo 2: adicionar o texto ao paragrafo p
        p.textContent = document.getElementById("txtNome").value;
        // Passo 3: Adicionar o novo paragrafo "p" ao seu pai "div"
        document.getElementById("box").appendChild(p);
    })
});