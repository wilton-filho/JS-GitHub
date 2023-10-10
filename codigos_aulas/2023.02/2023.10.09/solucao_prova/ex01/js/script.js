valor1 = parseFloat(prompt("Digite o primeiro valor:"));
valor2 = parseFloat(prompt("Digite o segundo valor:"));
operador = prompt("Digite o operador:");
resultado = 0;
switch (operador) {
    case '+': 
        resultado = valor1 + valor2;
    break;
    case '-': 
        resultado = valor1 - valor2;
    break;
    case '*': 
        resultado = valor1 * valor2;
    break;
    case '/': 
        resultado = valor1 / valor2;
    break;
}
document.write(`Resultado = ${resultado.toFixed(2)}`);