function main() {
    valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    valor2 = parseFloat(prompt("Digite o segundo valor:"));
    operador = prompt("Qual operação (+,-,*,/)?");
    
    calculadora(valor1, valor2, operador);
}
// versao 1
/*function calculadora(valor1, valor2, operador) {
    switch(operador) {
        case '+':
            alert(`${valor1} ${operador} ${valor2} = ${valor1 + valor2}`);
        break;
        case '*':
            alert(`${valor1} ${operador} ${valor2} = ${valor1 * valor2}`);
        break;
        case '-':
            alert(`${valor1} ${operador} ${valor2} = ${valor1 - valor2}`);
        break;
        case '/':
            if (valor2 == 0)
                alert("Divisão inválida!");
            else
                alert(`${valor1} ${operador} ${valor2} = ${valor1 + valor2}`);
        break;
        default:
            alert("Operador inválido!!");
    }
}*/
// versao 2
function calculadora(valor1, valor2, operador) {
    alert(`[${valor1} ${operador} ${valor2}] = ${eval(valor1+operador+valor2)}`)
}

main();