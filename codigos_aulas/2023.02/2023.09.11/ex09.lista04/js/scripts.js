console.clear();

// Passo 1: leitura da qtidade de nomes
nroPessoas = prompt("Qts pessoas?","4");

// Passo 2: leitura e armazenamento dos nomes no vetor "pessoas"
pessoas = [];
for (i=0; i<nroPessoas; i++)
    pessoas.push(prompt(`Digite o nome ${i+1}: `,`Fulano ${i+1}`));

for (i=0; i<nroPessoas; i++) { // Nro de pessoas sorteadas = nroPessoas

    // Passo 3: Sortear uma pessoa e exibí-la
    indiceSorteado = parseInt(Math.random()*pessoas.length);
    document.write(`<p>${i+1}&#176; - ${pessoas[indiceSorteado]}</p><hr>`);

    // Passo 4: Remover o nome sorteado do vetor "pessoas"
    pessoas.splice(indiceSorteado, 1)
}



