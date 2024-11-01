var nome = prompt("Digite o seu nome completo:","Wilton de Paula Filho");
var totalCaract = nome.length;
//1 Exibe a qtidade total de caract. contidos no nome informado
document.write(`<p><p>O nome <b>${nome}</b> possui ${totalCaract} caracteres</p>`);
//2 Exibe a primeira letra do nome informado
document.write(`<p>Primeira letra = ${nome.charAt(0)}</p>`);

//3 Exibe todas as letras do nome em maiúsculas
document.write(`<p>Letras maiusculas: ${nome.toUpperCase()}</p>`);

//4 Exibe todas as letras do nome em minúsculas
document.write(`<p>Letras maiusculas: ${nome.toLowerCase()}</p>`);

//5 Exibe o primeiro nome
//nome = "Wilton de Paula Filho"
var vetPartesNome = nome.split(" ");

var primeiroNome = vetPartesNome[0];
document.write(`<p>Primeiro nome = ${primeiroNome}</p>`);

//6 Exibe o último nome
var ultimoNome = vetPartesNome[vetPartesNome.length-1]
document.write(`<p>Último nome = ${ultimoNome}</p>`);

//7 Exibe o primeiro nome concatenado com a ultima parte do nome
var primeiroUltNome = `${primeiroNome} ${ultimoNome}`;
document.write(`<p>${primeiroUltNome}</p>`);

//8 Exibe o primeiro nome concatenado com a ultima parte do nome (todas as letras maiusculas)
document.write(`<p>${primeiroUltNome.toUpperCase()}</p>`);

//9 Exibe quantas palavras tem o nome
document.write(`<p>Total de palavras = ${vetPartesNome.length}</p>`);

//10 Exibe as iniciais do nome em letras maiusculas e concatenadas
//vetPartesNome = ['WILTON', 'DE', 'PAULA', 'FILHO']
var iniciaisNome = '';
for (var j in vetPartesNome)
    iniciaisNome += vetPartesNome[j].charAt(0);
document.write(`<p>${iniciaisNome.toUpperCase()}</p>`);

// 11 Trocar a primeira ocorrência de uma palavra contida no texto por outra informado pelo usuario
// Inputs:
// texto, palavra a ser substituída, palavra nova
var texto = "O carro quebrou na estrada de São Paulo. O carro foi levado para a oficina."
var palVelha = "carro";
var palNova = "caminhão";
document.write(`<p>${texto.replace(palVelha, palNova)}</p>`);

// 12 - Refatore o exercício anterior trocando todas as ocorrencias de carro por caminhão
document.write(`<p>${texto.replaceAll(palVelha, palNova)}</p>`);


// toUpperCase()
// toLowerCase()
// charAt()
// split()

//11 Verificar se um texto é um palíndromo

document.write(`<p></p>`);