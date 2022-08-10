n = parseInt(prompt("Informe um numero inteiro positivo (> 0):"));

if ((n < 0) || isNaN(n))
    alert("Entrada inválida!");
else {
    nome = prompt("Qual é o seu nome completo?");
    for (i=0; i<n; i++) document.write(`<p>${nome}</p>`);
}
