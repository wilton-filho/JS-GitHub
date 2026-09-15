texto = prompt("Digite um texto:","Instituto Federal do Triangulo Mineiro");

vetor = texto.split(" ");

iniciais = "";
for (i=0; i<vetor.length; i++) {
    // iniciais = iniciais + vetor[i].charAt(0)
    if (vetor[i].length > 2) // so concatena palavras diferentes de artigos (a,o,etc.) e preposições (da, do, de, etc)
        iniciais += vetor[i].charAt(0);
}

alert(iniciais);