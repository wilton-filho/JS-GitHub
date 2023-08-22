textoOriginal = "Jesus Te Ama Jesus é muito bom jesus";

// Converter TODOS os caracteres do texto para maiúsculo
novoTexto = textoOriginal.toUpperCase();
document.write(`<p>${novoTexto}</p>`);

// Converter TODOS os caracteres do texto para minúsculo
novoTexto = textoOriginal.toLowerCase();
document.write(`<p>${novoTexto}</p>`);

// Exibe a primeira palavra com as suas primeiras letras maiusculas
novoTexto = textoOriginal.slice(0,5).toUpperCase();
document.write(`<p>${novoTexto}</p>`);

// Exibe a palavra "Ama"
novoTexto = textoOriginal.substr(9,3);
document.write(`<p>${novoTexto}</p>`);

// Substitua a primeira palavra "Jesus" por "Deus"
novoTexto = textoOriginal.replace("Jesus","Deus");
document.write(`<p>${novoTexto}</p>`);

// Substitua todas as palavras "Jesus" por "Deus"
// OBS: a palavra "jesus" com letras minúsculas não será substituída
novoTexto = textoOriginal.replaceAll("Jesus","Deus");
document.write(`<p>${novoTexto}</p>`);

// Exiba o nro total de caracteres do texto
total = textoOriginal.length;
document.write(`<p>${total}</p>`);

// Exemplo:
// textoOriginal: "Jesus Te Ama Jesus é muito bom jesus"
// novoTexto: ["Jesus","Te","Ama","Jesus","é","muito","bom","jesus"]
// total: 8 (nro de elementos do vetor)
novoTexto = textoOriginal.split(" "); // retorna um array contendo todas as palavras
total = novoTexto.length; // Conta a quantidade de elementos presentes no vetor
document.write(`<p>Total de palavras = ${total}</p>`)

// Exibe a primeira frase de um texto
texto = "O IFTM é ótimo. Sou aluno do IFTM. Melhor IES de Uberlândia"
arrayFrases = texto.split("."); // retorna um array contendo todas as frases
document.write(`<p>${arrayFrases[0]}</p>`)
