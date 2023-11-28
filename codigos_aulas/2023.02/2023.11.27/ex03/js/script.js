window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", function () {
        // Criacao dos elementos
        var div = document.createElement("div");
        var img = document.createElement("img");
        var p = document.createElement("p");

        // Setando os atributos dos novos elementos
        img.setAttribute("src", "img/alien.png");
        img.setAttribute("name", document.getElementById("txtNome").value);
        img.addEventListener("click", function (event) {exibirMsg(event) })
        p.textContent = document.getElementById("txtNome").value;
        
        // Adicionando a imagem e o parágrafo ao novo DIV
        div.appendChild(img)
        div.appendChild(p);

        // Adicionando o novo DIV ao div do código HTML
        document.getElementById("box").appendChild(div);
    })
    function exibirMsg(event) {
        alert(event.target.name);
    }
});