// Opção 1:
window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", function () {
        var img = document.createElement("img");
        img.setAttribute("src", "img/stick.png");
        img.setAttribute("title", "imagem de teste");
        document.getElementById('box').appendChild(img);
    })
})

// Opção 2:
window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", function () {
        var img = document.createElement("img");
        img.src = "img/stick.png";
        img.title = "imagem de teste";
        document.getElementById('box').appendChild(img);
    })
})

// Opção 3:
window.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", function () {
        var img = new Image();
        img.src = "img/stick.png";
        img.title = "imagem de teste";
        document.getElementById('box').appendChild(img);
    })
})


// Observações:
// Comparação das opções
// Opção 1:

// Usa document.createElement("img") e setAttribute(), o que resulta em chamadas de função adicionais desnecessárias.
// O setAttribute("src", "...") e setAttribute("title", "...") são menos performáticos do que a atribuição direta de propriedades.
// Opção 2:

// Mantém document.createElement("img"), mas usa img.src e img.title, eliminando chamadas de setAttribute(), tornando-a mais eficiente do que a Opção 1.
// Já é uma boa otimização.
// Opção 3 (Mais otimizada):

// Usa new Image(), que é mais específico para a criação de imagens, sendo levemente mais eficiente do que document.createElement("img") em termos de performance e clareza.
// Atribui src e title diretamente, eliminando chamadas desnecessárias.

// Conclusão
// 🔹 A Opção 3 é a mais otimizada porque utiliza new Image() (método nativo para criação de imagens) e atribuição direta de propriedades, tornando o código mais enxuto e performático. 🚀