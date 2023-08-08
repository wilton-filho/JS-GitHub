// Caixa de diálogo para exibir informações
//alert("Seja, bem-vindo!");

// 1º parâmetro do prompt: texto da caixa
// 2º parâmetro do prompt: texto do input
nome = prompt("Digite o seu nome: ","Wilton");

sobrenome = prompt("Digite o seu sobrenome: ","Filho");

// Solucao 1
//nomeCompleto = nome + " " + sobrenome;
//alert("Nome completo = " + nomeCompleto);

// Solucao 2
// Nota: posso usar "" ou ''
alert('Nome completo = ' + nome + ' ' + sobrenome);

// Solução 3: template string
// Nota: uso da crase ``
// Nota: para usar uma variável dentro da crase usa-se ${VARIAVEL}
alert(`Nome completo = ${nome} ${sobrenome}`);
