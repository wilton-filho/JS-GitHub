// Exibir msg após carregamento completo da página
window.addEventListener("load", function () {
    alert('Olá, seja-vindo!');
});

// Validação do formulário
document.getElementById("btnEntrar").addEventListener("click", function () {
    nome = document.getElementById("txtNome").value.trim();

    if (nome == "") 
        alert("Nome inválido. Favor inserir um nome.")
    else {
        vetPalavras = nome.split(" ");
        if (vetPalavras.length > 1) {
            nomeSobrenome = `${vetPalavras[0]} ${vetPalavras[vetPalavras.length - 1]}`
            localStorage.setItem("nome",nomeSobrenome);
            window.open("menu.html","_self");
        }
        else alert("Nome inválido. \nFavor inserir o seu NOME + SOBRENOME separado por um espaço");
    }
});



