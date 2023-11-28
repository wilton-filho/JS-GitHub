window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", function () {
        // Passo 1: criar uma imagem
        var img = document.createElement("img");

        // Passo 2: criar o atributo "src" da imagem
        img.setAttribute("src","img/alien.png");

        // Passo 3: Adicionar a imagem a caixa "box"
        document.getElementById("box").appendChild(img);

    })
});