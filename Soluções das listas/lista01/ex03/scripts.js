nome = prompt("Qual é o seu nome completo?");
idade = prompt("Qual é a sua idade?");

if (idade >= 18) 
    alert(`${nome}, você já POSSUI idade para tirar carteira`);
else 
    alert(`${nome}, você ainda NÃO POSSUI idade para tirar carteira, ainda falta(m) ${18-idade} anos`);