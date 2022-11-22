function colocarInfo() {
    var painel = document.getElementById("painel");
    var texto = document.getElementById("txtInfo").value;

    // Criar uma caixa para conter a img + p
    var caixinha = document.createElement("div");

    // Criar img dinamicamente
    var imagem = document.createElement("img"); 
    imagem.setAttribute("src","../img/stick.png");
    imagem.setAttribute("id",texto);
    imagem.addEventListener("click",showMsg);

    // Criar paragrafo dinamicamente
    
    var p = document.createElement("p");
    p.innerHTML = texto;

    // Montar a caixinha
    caixinha.appendChild(imagem);
    caixinha.appendChild(p);

    painel.appendChild(caixinha);
}

function showMsg(evento) {
    alert(evento.currentTarget.id);
}