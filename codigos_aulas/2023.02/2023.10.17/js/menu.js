window.addEventListener("load", function () {
    nome = localStorage.getItem("nome");
    if (nome) {
        vetNomes = nome.split(" ");
        if (vetNomes.length > 1) { // Painel de sucesso
            document.getElementById("painelSucesso").classList.remove("invisivel");
            document.getElementById("painelSucesso").classList.add("visivel");
            document.getElementById("nomeUsuario").innerHTML = nome;
        }
        else showMsgErro("Não existe nenhum nome. Clique no link abaixo para inserir um nome.")
    }
    else showMsgErro("Nome inválido. É necessário informar NOME + SOBRENOME. Clique no link abaixo para inserir um NOME COMPLETO.");
})

document.getElementById("btnJogar").addEventListener("click", function () {
    window.open("felinos.html","_self");
})

function showMsgErro(msg) {
    document.getElementById("painelErro").classList.remove("invisivel");
    document.getElementById("painelErro").classList.add("visivel");
    document.getElementById("msgErro").innerHTML = msg;
}