opcoes = ["pedra","papel","tesoura"];

console.log("Resultado do sorteio:");

indiceJogador1 = Math.floor(Math.random()*3); // Sorteio: 0 a 2
console.log(`Jogador 1: ${opcoes[indiceJogador1]}`);
document.write(`<img src='img/imagem0${indiceJogador1}.png'>`);

indiceJogador2 = Math.floor(Math.random()*3); // Sorteio: 0 a 2
console.log(`Jogador 2: ${opcoes[indiceJogador2]}`);
document.write(`<img src='img/imagem0${indiceJogador2}.png'>`);

if (indiceJogador1 == indiceJogador2)
    document.write("Empate");
else if (indiceJogador1 == 0) { // Pedra do Jogador 1
        if (indiceJogador2 == 1) document.write("Jogador 2 ganhou!")
        else document.write("Jogador 1 ganhou!")
     }
     else if (indiceJogador1 == 1) { // Papel do Jogador 1
        if (indiceJogador2 == 0) document.write("Jogador 1 ganhou!")
        else document.write("Jogador 2 ganhou!")
     }
     else if (indiceJogador1 == 2) { // Tesoura do Jogador 1
        if (indiceJogador2 == 0) document.write("Jogador 2 ganhou!")
        else document.write("Jogador 1 ganhou!")
     }
