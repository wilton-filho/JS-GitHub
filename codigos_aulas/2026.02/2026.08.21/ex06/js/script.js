texto = prompt("Digite um texto:","Wilton de Paula Filho");

vetorPalavras = texto.split(" ");

primeira = vetorPalavras[0];
ultima = vetorPalavras[vetorPalavras.length - 1];

// primeiraUltima = primeira + " " + ultima;
primeiraUltima = `${primeira} ${ultima}`;

alert(primeiraUltima);

//alert(primeiraUltima.toUpperCase());
//alert(primeiraUltima.toUpperCase().length);