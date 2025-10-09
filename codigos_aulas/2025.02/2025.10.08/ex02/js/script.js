window.addEventListener("load", function () {

    btnGerar = document.getElementById("btnGerar");
    
    // btnGerar.addEventListener("click",addParag);

    // function addParag() {
    //     p = document.createElement("p");
    //     b = document.createElement("b");
    //     b.textContent = "Wilton Filho";
    //     //p.appendChild(b);
    //     document.getElementById("caixaParagrafos").appendChild(p).appendChild(b);
    // }

    btnGerar.addEventListener("click",addImg);

    function addImg() {
        // criacao da caixa auxiliar
        div = document.createElement("div");

        // criacao da imagem
        imagem = new Image();
        imagem.src = "img/stick.png";
        imagem.alt = "stick de uma pessoa";
        imagem.name = document.getElementById("txtNome").value;
        imagem.addEventListener("click",function (event) {showMsg(event)});

        // criacao do paragrafo
        p = document.createElement("p");
        p.textContent = document.getElementById("txtNome").value;

        // adicao da imagem e do paragrafo, nessa sequencia, na caixa auxiliar
        div.appendChild(imagem);
        div.appendChild(p);

        // adicao da caixa auxiliar à caixa "box"
        document.getElementById("box").appendChild(div);
    }

    function showMsg(event) {
        alert(`Personagem: ${event.target.name}`);
    }


})