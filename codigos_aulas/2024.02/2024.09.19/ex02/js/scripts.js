// Tipos primitivos de dados em JS: number, string e boolean
// idade = 10;
// console.log(typeof(idade)); // number (integer, float ...)

// idade = "wilton";
// console.log(typeof(idade)); // string

// idade = true;
// console.log(typeof(idade)); // boolean

// Já vimos:
// alert
// confirm

nome = prompt("Qual é o seu nome?");

if ((nome == null) || (nome.trim() == ""))
    alert("que pena, vc nao informou o nome")
else {
    console.log(nome);
    idade = prompt("Qual é a sua idade?");

    while ((idade <= 0) || (idade >= 130) || (idade == null)) 
        idade = prompt("Informe uma idade entre 1 e 130:");

    if (idade >= 18)
        alert(`${nome}, você tem idade suficiente para tirar CNH`);
    else
        alert(`${nome}, você não tem idade suficiente para tirar CNH`);
}
