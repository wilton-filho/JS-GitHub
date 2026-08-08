// alert("Seja bem-vindo!");
// alert("Seja bem-vindo 2!");
// result = confirm("Você deseja finalizar o cadastro?");
// if (result)
//     alert("Cadastro efetivado!");
// else 
//     alert("Cadastro cancelado!");
// alert(result);


// idade = prompt("Qual a sua idade?");
// if (idade != null) { // analise do botao "ok"
//     if (idade != "")
//         alert(`Você tem ${idade} anos`);
//     else 
//         alert("Idade inválida. Informe uma idade entre 2 e 140 (anos)");
// }
    


// valor = prompt("Digite um número inteiro:");
// alert(`O dobro de ${valor} = ${valor*2}`);
alert("CALCULADORA")
operando1 = prompt("Digite o primeiro valor:");
operando2 = prompt("Digite o segundo valor:");
operador = prompt("Digite um operador:\n\n[+] Soma\n[-] Subtração \n[*] Multiplicação \n[\\] Divisão");

alert(eval(operando1 + operador + operando2));


/*alert("CALCULADORA")
operando1 = parseFloat(prompt("Digite o primeiro valor:"));
operando2 = parseFloat(prompt("Digite o segundo valor:"));
operador = prompt("Digite um operador:\n\n[+] Soma\n[-] Subtração \n[*] Multiplicação \n[\\] Divisão");

switch (operador) {
    case "+":
        alert(`${operando1} ${operador} ${operando2} = ${operando1+operando2}`);
        break;
    case "-":
        alert(`${operando1} ${operador} ${operando2} = ${operando1-operando2}`);
        break;
    case "*":
        alert(`${operando1} ${operador} ${operando2} = ${operando1*operando2}`);
        break;
    case "/":
        if (operando2 == 0)
            alert("Divisão inválida!");
        else 
            alert(`${operando1} ${operador} ${operando2}=${operando1/operando2}`);
        break;
    default:
        alert("Operador inválido!");
}

/*if (operador == "+")
    alert(`${operando1} ${operador} ${operando2} = ${operando1+operando2}`);
else if (operador == "-")
    alert(`${operando1} ${operador} ${operando2} = ${operando1-operando2}`);
else if (operador == "*")
    alert(`${operando1} ${operador} ${operando2} = ${operando1*operando2}`);
else if (operador == "/") {
        if (operando2 == 0)
            alert("Divisão inválida!");
        else 
            alert(`${operando1} ${operador} ${operando2} = ${operando1/operando2}`);
     }
else alert("Operador inválido!");
*/
