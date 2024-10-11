function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    return a / b;
}

function calcular(opcao, valor1, valor2) {
    switch(opcao) {
        case '+':
            alert(somar(valor1, valor2));
        break;
        case '-':
            alert(subtrair(valor1, valor2));
        break;
        case '/':
            alert(dividir(valor1, valor2));
        break;
        case '*':
            alert(multiplicar(valor1, valor2));
        break;
    }
}

function lerValor(msg) {
    return parseFloat(prompt(msg));
}

function main() {
    var valor1 = lerValor('Digite o primeiro valor');
    var valor2 = lerValor('Digite o segundo valor');

    var opcao = prompt("MENU\n [+] Somar \n [-] Subtrair \n [*] Multiplicar \n [/] Dividir");

    calcular(opcao, valor1, valor2);
}

main();