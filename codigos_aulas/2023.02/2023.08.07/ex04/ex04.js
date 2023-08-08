// Solução 1
/*
nota1 = prompt("Nota 1:");
nota2 = prompt("Nota 2:");
notaFinal = parseFloat(nota1) + parseFloat(nota2);
*/

// Solução 2
nota1 = parseFloat(prompt("Nota 1:"));
nota2 = parseFloat(prompt("Nota 2:"));
notaFinal = nota1 + nota2;

if (notaFinal >= 60) 
    alert("APROVADO")
else 
    alert(`REPROVADO. Faltaram ${60-notaFinal} pontos.`);