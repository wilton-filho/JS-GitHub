alert("Seja bem-vindo a Calculadora!")

valor1 = parseFloat(prompt("Digite o primeiro valor:"));
valor2 = parseFloat(prompt("Digite o segundo valor:"));
operador = prompt("Qual operação você deseja (+, -, *, /)?");

resultado = "invalido";

switch (operador) {
    case "+":
        resultado = valor1 + valor2;
        break;
    case "-":
        resultado = valor1 - valor2;
        break;
    case "*":
        resultado = valor1 * valor2;
        break;
    case "/":
        if (valor2 == 0) alert("Divisão inválida");
        else resultado = valor1 / valor2;
        break;
    default:
        alert("Operador inválido!");
}

if (resultado != "invalido")
    alert(`O resultado = ${resultado}`);

