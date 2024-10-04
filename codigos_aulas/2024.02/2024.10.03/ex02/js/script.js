// var vet = [1,2,3,4,5];
// var nomes = ["Ana","rose","bea"];

// for (var i in vet)
//   console.log(vet[i])

// for (var i in nomes)
//   console.log(nomes[i])

// for (var i=0; i<vet.length; i++)
//   console.log(vet[i])

// Lembrete: colocar o break ao término de cada case
// var valor = 10;
// switch (valor) {
//   case 5:
//     alert(valor * 2);
//     break;
//   case 10:
//     alert(valor * 3);
//     break;
//   case 15:
//     alert(valor * 4);
//     break;
//   default:
//     alert("Valor inválido");
//     break;
// }

// var valor = prompt("Digite um número:");

// estrutura de selecao composta (if ... else)
// if (valor%2 == 0) 
//   alert("par");
// else 
//   alert("impar")

// operador ternário
// (valor%2 == 0)?alert("par"):alert("impar");

var valor = prompt("Digite um número: ");
resultado = (valor%2 == 0)?valor*2:valor*3;
alert(resultado);