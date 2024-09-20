nome = prompt("Qual é o seu nome?","Wilton Filho");

total = prompt("Quantas vezes quer exibir o seu nome?","5");

cor = prompt("Qual cor você quer ver o seu nome (escreva em inglês)?")

for (i=0; i<total; i++)
    document.write(`<p style="color:${cor}">${i+1} - ${nome}</p>`)