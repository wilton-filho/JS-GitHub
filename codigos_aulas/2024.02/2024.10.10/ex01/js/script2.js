// Exemplo de passagem de parâmetro por valor (são enviados os valores das variaveis no momento da chamada da função)
// function somar(a, b) {
//     a = a * 2;
//     var c = a + b;
//     return c;
// }
//-----------------------------------------
// var x, y, z;

// x = 10;
// y = 20;
// z = somar(x, y);

// console.log(z);

// Exemplo de passagem de parâmetro por referência. Neste exemplo, o endereço de memória da variável "vetor" que está sendo passado com o parâmetro, ao invés de seu valor
function duplicar(vet) {
    for (var i=0; i<vet.length; i++)
        vet[i] = vet[i] * 2;
}

//----------------------------

var vetor = [10,20,30];
console.log(vetor);
duplicar(vetor);
console.log(vetor);