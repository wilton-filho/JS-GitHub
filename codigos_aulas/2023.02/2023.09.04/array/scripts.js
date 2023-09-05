// Lista de métodos que a gente vai aprender:

// push()
// pop()
// shift()
// reverse()
// splice()
// join()

console.clear();

vet = [10,20,30];
console.log(vet);

// Adiciona o elemento 40 no final do vetor vet = [10,20,30];
vet.push(40);
console.log(vet);

// Remove o elemento 40 do final do vetor vet = [10,20,30,40];
// Resultado = vet = [10,20,30];
elemento = vet.pop();
console.log(vet);

// Remove o elemento 10 do inicio do vetor vet = [10,20,30];
// Resultado = vet = [20,30];
elemento = vet.shift();
console.log(vet);

// Inverte a ordem do vetor vet = [20,30]
// Resultado = vet = [30,20]
vet.reverse();
console.log(vet);

// Adiciona o valor 25 no vet = [20,30]
// Resultado = vet = [30,25,20]
vet.splice(1,0,25);
console.log(vet);

// Adiciona o valor 23 no vet = [30,25,20]
// Resultado = vet = [30,25,23,20]
vet.splice(2,0,23);
console.log(vet);

// Remove o valor 23 do vet = [30,25,23,20]
// Resultado = vet = [30,25,20]
vet.splice(2,1);
console.log(vet);

// Converte o vetor vet = [30,25,20] na string "30 25 20"
texto = vet.join(" ");
console.log(texto);
console.log(vet);






