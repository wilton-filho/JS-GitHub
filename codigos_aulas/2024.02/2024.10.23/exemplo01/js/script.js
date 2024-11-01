//var nroAleatorio = Math.random();  // [0,1)

//var nroAleatorio = parseInt(Math.random()*10)+1; // 1 a 10

//var nomes = ["Ana", "José", "Beto", "Carla", "Joao"];
var megaSena = [];
for (var j=1; j<=60; j++) megaSena.push(j);
//console.log(megaSena);

// var tamanho = nomes.length;


// // Sortear todos os alunos
// for (var i=0; i<tamanho; i++) {
//     var indiceAleat = parseInt(Math.random()*nomes.length); 
//     console.log(nomes[indiceAleat]); 
//     nomes.splice(indiceAleat,1);
// }

// Sortear os nros da megasena
for (var i=0; i<6; i++) {
    var indiceAleat = parseInt(Math.random()*megaSena.length); 
    console.log(megaSena[indiceAleat]); 
    megaSena.splice(indiceAleat,1);
}



// [0] Ana
// [1] José
// [4] João
// [1] José

// console.log(indiceAleat);
// console.log(nomes);
// console.log(nomes[indiceAleat]);