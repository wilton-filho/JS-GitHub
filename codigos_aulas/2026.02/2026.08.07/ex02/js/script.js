qtidade = prompt("Quantas vezes você quer ver o seu nome?");
r = prompt("Que cor você quer no seu nome para R:")
g = prompt("Que cor você quer no seu nome para G:")
b = prompt("Que cor você quer no seu nome para B:")

for (i=0; i<qtidade; i++)
    document.write(`<p style='color:rgb(${r},${g},${b})'>Wilton Filho</p>`);