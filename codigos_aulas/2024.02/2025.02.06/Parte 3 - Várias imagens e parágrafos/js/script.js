window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", function () {
        var txtNome = document.getElementById('txtNome').value;

        // Criacao de um novo parágrafo
        var p = document.createElement("p");
        p.textContent = txtNome;

        // Criacao de uma nova imagem
        var img = new Image();
        img.src = "img/stick.png";
        
        // Criacao de uma caixa para armazenar 1 imagem + 1 paragrafo
        var boxInterna = document.createElement("div");
        // boxInterna.setAttribute("class","boxInterna");
        // boxInterna.classList.add("boxInterna");
        boxInterna.className = "boxInterna";
        
        // Adicionando os filhos da caixa recém-criada
        boxInterna.appendChild(img);
        boxInterna.appendChild(p);

        // Adicionando o parágrafo ao body
        document.getElementById('boxExterna').appendChild(boxInterna);
    });
})