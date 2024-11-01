var vetorCartas = [];
const TOTAL_CARTAS = 27;

function gerarNroAleatorio(inicio, fim) {
    return Math.floor(Math.random()*(fim - inicio + 1)) + inicio;
}

function gerarCartas(vet) {
    for (var i=0; i<TOTAL_CARTAS; i++) vet.push(i+1);
}

function sortearCartasJogador(vet, nroCartas) {
    for (var i=0; i<nroCartas; i++) {
        var indice = gerarNroAleatorio(0, vet.length);
        document.write(`<img src='cartas/carta${vetorCartas[indice]}.png'>`);
        vet.splice(indice,1);
    }
}

function sortearJogadores(vetorCartas, nroJogadores) {
    for (var i=0; i<nroJogadores; i++) {
        document.write(`<h2> Cartas do jogador ${i+1}:</h2>`);
        sortearCartasJogador(vetorCartas, 3);
    }
}

function main() {
    gerarCartas(vetorCartas);
    sortearJogadores(vetorCartas, 4);
}

main();