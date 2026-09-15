nomeCompleto = prompt("Digite o seu nome completo: ").trim();

if (nomeCompleto != null) { // Pressionou o btn "Ok"?
    if (nomeCompleto != "") {
        document.write(`<p>${nomeCompleto}</p>`);
        document.write(`<p>${nomeCompleto} tem ${nomeCompleto.length} caracteres</p>`)
    }
    else 
        document.write(`<p>Nome inválido. Tente novamente!</p>`);
}