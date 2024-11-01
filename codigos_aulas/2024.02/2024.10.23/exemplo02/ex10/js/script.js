function gerarNroAleatorio(inicio, fim) {
    return Math.floor(Math.random()*(fim - inicio + 1)) + inicio;
}

function sortearCarta() {
    var carta = gerarNroAleatorio(1,27);
    document.write(`<img src='cartas/carta${carta}.png'>`);
}

sortearCarta();