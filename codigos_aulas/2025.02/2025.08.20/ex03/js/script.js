nome = prompt("Informe o seu nome completo:","Wilton Filho");
qtidade = prompt("Quantas vezes deseja ver o seu nome?");
cor = prompt("Qual cor você deseja para o seu nome?");

document.write("<ol>");

for (i=0; i<qtidade; i++) {
    // document.write(`<p style="color:red">${i+1} - ${nome}</p>`);
    document.write(`<li style="color:${cor}">${nome}</li>`);
}

document.write("</ol>");
