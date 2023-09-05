document.write(`<h1>Números da mega sena</h1>`)

// Criando um vetor (balaio) contendo numeros pertencentes ao intervalo [1,60]. 
// Lembrando que esses são os nros da Mega Sena (1 a 60)
balaio = [];
for (i=1; i<=60; i++) balaio.push(i);

//Sorteando os 6 nros da Mega sena (Detalhe: sem repetição)
for (i=0; i<6;i++) {
    indice = Math.round(Math.random()*balaio.length-1); // Nro aleatorio entre 0 e 59
    document.write(`${balaio[indice]} - `);
    balaio.splice(indice,1);
}


