nota1 = parseFloat(prompt("Digite a nota 1:"));
nota2 = parseFloat(prompt("Digite a nota 2:"));
notaTotal = nota1 + nota2;

if (notaTotal >= 60)
    alert(`Você está aprovado. A sua nota total foi ${notaTotal.toFixed(1)} pontos. Parabéns`);
else
    alert(`Você está reprovado. A sua nota total foi ${notaTotal} pontos. Faltaram ${60-notaTotal} pontos para você ser aprovado. Estude mais.`);