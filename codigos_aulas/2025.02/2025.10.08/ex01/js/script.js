window.addEventListener("load", function () {


    // document.getElementById("btn").addEventListener("click", function () {
    //     p = document.createElement("p");
    //     p.textContent = document.getElementById("txtNome").value;
    //     document.getElementById("box").appendChild(p);
    // })

    document.getElementById("btn").addEventListener("click", function () {
    
        div = document.createElement("div");
        p = document.createElement("p");
        p.textContent = document.getElementById("txtNome").value;

        img = new Image();
        img.src = "img/stick.png";
        img.alt = "imagem de um homem";
        img.title = "imagem de um stick preto";
        img.name = document.getElementById("txtNome").value;
        img.addEventListener("click", function (event) {exibirNome(event)})
        
        div.appendChild(img);
        div.appendChild(p);

        document.getElementById("box").appendChild(div);

    
    })


    function exibirNome(e) {
        alert(e.target.name);
    }




})