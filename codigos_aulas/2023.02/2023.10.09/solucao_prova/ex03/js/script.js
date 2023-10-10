txt = prompt("Digite um texto qualquer:", "O amor é um sentimento sublime. AMOR é entrega desde que o Amor, seja verdadeiro");
pal = prompt("Digite uma palavra qualquer:", "amor");
contPal = 0;

vetPalavras = txt.split(" ");
console.log(vetPalavras);
for (i = 0; i < vetPalavras.length; i++) 
    if (vetPalavras[i].toUpperCase() == pal.toUpperCase()) {
        document.write(vetPalavras[i] + " - ");
        contPal++;
    }

document.write(`<p>Número de ocorrências = ${contPal}</p>`);

