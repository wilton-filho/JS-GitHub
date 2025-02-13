window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", adicionar);

    function adicionar() {

        txtNome = document.getElementById('txtNome').value;

        // Criacao de um novo parágrafo
        var p = document.createElement("p");
        p.textContent = txtNome;

        // Opção 1: Criacao de uma imagem
        // img = document.createElement("img");
        // img.setAttribute("src","img/stick.png");
        // img.setAttribute("name",txtNome);
        // img.addEventListener("click", function() {
        //     show(this.name);
        // });

        // Opção 2: Criacao de uma imagem
        var img = new Image();
        img.src = "img/stick.png";
        img.setAttribute("name",txtNome);
        img.addEventListener("click", showMsg);

        // Criacao de uma caixa com uma imagem e um parágrafo
        div = document.createElement("div");
        div.classList.add("boxInterna");
        div.appendChild(img);
        div.appendChild(p);

        document.getElementById("boxExterna").appendChild(div);
    }

    // Opção 2: Criacao de uma imagem
    function showMsg(e) {
        alert(e.currentTarget.name);
    }

    // Opção 1: Criacao de uma imagem
    function show(txt) {
        alert(`Você clicou em ${txt}`);
    }
})