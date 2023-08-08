nome = prompt("Qual é o seu nome completo?","Wilton Filho");

idade = prompt("Quantos anos você tem?");

// Nota: idade == null (testa se o btn cancelar foi selecionado)
while ((idade == "") || (idade == null)) {
    alert("Favor informar a idade")
    idade = prompt("Quantos anos você tem?");
}

if (idade < 18) 
    alert(`Idade insuficiente para tirar CNH. Falta(m) ${18-idade} anos`);
else
    alert("Você tem idade suficiente para tirar CNH");