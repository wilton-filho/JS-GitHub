nroPessoas = prompt("Qts pessoas?","4");

// Leitura 
pessoas = [];
for (i=0; i<nroPessoas; i++)
    pessoas.push(prompt(`Nome da pessoa ${i+1}:`,`Fulano ${i+1}`));

console.log(pessoas);

for (i=0; i<nroPessoas; i++) {
    indice = parseInt(Math.random()*pessoas.length);
    document.write(`<p>${pessoas[indice]}</p>`);
    pessoas.splice(indice,1);
}
