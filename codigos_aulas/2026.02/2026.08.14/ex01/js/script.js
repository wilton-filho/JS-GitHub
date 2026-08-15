nome = "wilton de paula filho";
alert(nome);

// Converte letras minúsculas para maiúsculas
nomeMaiuscula = nome.toUpperCase();
alert(nome.toUpperCase());

// Retorna a primeira letra do nome original
alert(nome.charAt(1));

// Converte letras maiúsculas para minúsculas
nomeMinuscula = nomeMaiuscula.toLowerCase();
alert(nomeMinuscula);

// Remoção de caracteres em branco dos lados direito e esquerdo da string
texto = "   Rua Blanche Galassi    ";
alert(texto);
texto = texto.trim();
alert(texto);

//Troca uma palavra por outra
paragrafo = "o carro parou na rua. Esse carro tá muito ruim. Preciso levar o carro na oficina. Tenho que ganhar mais dinheiro para trocar o meu carro amarelo.";
localizar = "carro";
substituirPor = "automovel";

// troca a primeira ocorrencia
parNovo1 = paragrafo.replace(localizar, substituirPor);
alert(parNovo1);

// troca todas as ocorrencias
parNovo2 = paragrafo.replaceAll(localizar, substituirPor);
alert(parNovo2);

// Contagem de caracteres numa string
texto = "wilton filho";
alert(`Número de caracteres = ${texto.length}`);
console.log(`Número de caracteres = ${texto.length}`);

// Imprime cada letra de "IFTM" numa linha diferente no console
texto = prompt("Qual a palavra:")
for (i=0; i<texto.length; i++) {
    console.log(texto.charAt(i));
}

// Exibe a primeira letra de um texto em maiscula
texto = "deus";
//maiuscula = texto.toUpperCase(); //DEUS
//primeiraLetra = maiuscula.charAt(0);
console.log(texto.toLowerCase().charAt(0));

// Exibe a primeira palavra de um nome com letras maiusculas
nome = "Wilton de Paula Filho";
nomeDividido = nome.split(" "); //[wilton,de,paula,filho]
console.log(nomeDividido[0].toUpperCase()); // exibe o primeiro nome "wilton"

// Solicita o nome completo de uma pessoa e exibe a primeira e ultima palavra do nome
nome = prompt("Digite o seu nome: ");
nomeVetor = nome.split(" ");//[Wilton,de,paula,filho]
x = nomeVetor[0] + " " + nomeVetor[nomeVetor.length - 1];
console.log(x.toUpperCase());


