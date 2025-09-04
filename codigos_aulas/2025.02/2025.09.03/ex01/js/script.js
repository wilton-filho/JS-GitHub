vet = [];

for (i=0; i<20; i++)
    vet[i] = 10*(i+1);

indice = prompt("Você quer remover o elemento de qual índice?");

// mostrar o indice
console.log(indice);

// mostrar o vetor atualizado
elementoRemovido = vet.splice(indice,1);
console.log(vet);

// mostrar o elemento que foi removido
console.log(elementoRemovido[0]);
