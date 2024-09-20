nome = prompt('Informe o seu nome','Wilton Filho');

nota1 = parseFloat(prompt('Informe a nota 1 [0 - 50]:'));
nota2 = parseFloat(prompt('Informe a nota 2 [0 - 50]:'));

soma = nota1 + nota2;

if (soma >= 60) 
    alert(`${nome}, você está APROVADO. \nSua nota final = ${soma} pontos`);
else 
    alert(`${nome}, você está REPROVADO. \nFaltaram ${60-soma} pontos`);