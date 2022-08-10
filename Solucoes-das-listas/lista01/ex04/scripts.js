nota1 = parseFloat(prompt("Qual é a sua nota no primeiro bimestre?"));
nota2 = parseFloat(prompt("Qual é a sua nota no segundo bimestre?"));

resultado = nota1 + nota2;

if (resultado >= 60) 
    alert("APROVADO!");
else 
    alert(`REPROVADO. Faltaram ${60 - resultado} pontos para ser aprovado.`);