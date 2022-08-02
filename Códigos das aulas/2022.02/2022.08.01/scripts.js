
// -----------------------------------------
// Exemplo 01 
/*
nome1 = "Hello";
nome2 = "World";
alert(`${nome1} ${nome2}`);
*/

// -----------------------------------------
// Exemplo 02
/*
nome = prompt("Digite o seu nome:");
if (nome == null) // O btn "cancelar" foi pressionado
    alert("Que pena!");
else if (!nome)  // O btn "Ok" foi pressionado
        alert(`Visitante, seja bem-vindo!`);
     else 
        alert(`${nome}, seja bem-vindo!`);
*/

// -----------------------------------------
// Exemplo 03
/*
nome = prompt("Digite o seu nome:");
alert(`${nome}, seja bem-vindo!`);
if (confirm("Deseja confirmar?"))
   alert("Btn ok pressionado");
else 
   alert("Btn cancelar pressionado");
*/

// -----------------------------------------
// Resumo: alert, prompt e confirm
/*
alert("msg de texto")
variavel = prompt("pede algo")
if(confirm("faz um pergunta"))
*/

// -----------------------------------------
// Exemplo 04
/*
document.write("<p style='font-weight:bold'>Wilton Filho</p>");
document.write("<h1 style='color:red'>Título</h1>");
document.write("<h2 style='text-decoration:underline'>Título 2</h2>");
*/

// -----------------------------------------
// Exemplo 05
/*
nome = prompt("Qual é o seu nome?");
n = prompt("Quantas vezes deseja ver o seu nome?");
document.write("<ul>");
for (i=0; i<n; i++)
    document.write(`<li>${nome}</li>`);
document.write("</ul>");
*/

// -----------------------------------------
// Exemplo 06
/*
console.log("wilton");
x = 10;
y = 20;
console.log(x+y)
*/

// -----------------------------------------
// Exemplo 07
/*
x = 10;
console.log(x);
console.log(typeof(x));
x = "wilton";
console.log(x);
console.log(typeof(x));
*/

// -----------------------------------------
// Exemplo 08
nome = prompt("Digite o seu nome");
tamanho = nome.length;
for (i = 0; i < tamanho; i++)
    document.write(`<p>${nome.charAt(i)}</p>`);
