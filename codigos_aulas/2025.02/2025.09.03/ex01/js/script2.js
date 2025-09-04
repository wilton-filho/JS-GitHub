vet = [];

// Preenchendo os 60 numeros da mega sena
for (i=1; i<=60; i++)
    vet[i-1] = i;

// console.log(vet);

// Gera um numero aleatorio entre 0 e 59 (ultimo indice do vetor)
for (i=0; i<6; i++) {
    indiceVetor = Math.floor(Math.random()*vet.length);
    nroSorte = vet[indiceVetor];
    console.log(nroSorte);
    // remover o elemento sorteado
    vet.splice(indiceVetor,1);
}

// console.log(vet);




