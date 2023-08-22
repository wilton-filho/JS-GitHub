nome = prompt("Qual é o seu nome?");

n = prompt("Qts x vc quer exibir o seu nome? (> 0)");
while (n < 0) {
    alert("Informe um valor > 0");
    n = prompt("Qts x vc quer exibir o seu nome? (> 0)");
}

for (i=0; i<n; i++) 
    document.write(`<p>${nome}</p>`)