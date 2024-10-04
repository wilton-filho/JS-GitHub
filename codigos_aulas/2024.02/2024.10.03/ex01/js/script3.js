var passagHomens = [];
var passagMulheres = [];
var sexo, nome;

var totalPassageiros = prompt("Quantos passageiros vão entrar?");

for (var i=0; i<totalPassageiros; i++) {
    // Leitura do sexo
    sexo = prompt(`Qual o sexo do passageiro ${i+1} (H ou M)?`);
    // Leitura do nome de cada passageiro
    nome = prompt(`Qual o nome do passageiro ${i+1}?`);
    if (sexo == "H")
        passagHomens.push(nome);
    else passagMulheres.push(nome);
}

var nroIteracoes;
if (passagHomens.length > passagMulheres.length) nroIteracoes = passagHomens.length;
else nroIteracoes = passagMulheres.length;

document.write(`<table>`);
for (i=0; i<nroIteracoes; i++) {
    document.write(`    <tr>`);
    
    if (passagHomens[i] != undefined)
        document.write(`<td>${passagHomens[i]}</td>`);
    else document.write(`<td>[ - ]</td>`);
    if (passagMulheres[i] != undefined)
        document.write(`<td>${passagMulheres[i]}</td>`);
    else document.write(`<td>[ - ]</td>`);
    
    document.write(`    </tr>`);
}
document.write(`</table>`);



// console.log(passagHomens);
// console.log(passagMulheres);