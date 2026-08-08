// x = 10;
// alert(x);
// x = 20;
// y = 30;
// alert(x);
// alert(`O valor de x = ${x}\nO valor de y = ${y}`);
// x = 'WILTON';
// x = true;
// alert(x);

// alert("Hello, World! 1");
/*
alert("Hello, World! 2");
alert("Hello, World! 3");
*/

// btn = confirm("Deseja sair da página?");
// if (btn)
//     alert("Saiuuuuu!");
// else
//     alert("Não vai sair!")
// alert(btn)

idade = prompt("Qual é a sua idade?");
if (idade != null) {// o botao cancelar foi pressionado
    if (idade != "")
        alert(`Você tem ${idade} anos`);
    else 
        alert("Você não informou nenhuma idade válida!");
}