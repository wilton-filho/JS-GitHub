resultado = document.getElementById("resultado");
btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click",calcular);

function calcular() {
    valor1 = parseFloat(document.getElementById("valor1").value);
    valor2 = parseFloat(document.getElementById("valor2").value);
    operador = document.getElementById("operador").value;
    result = 0;

    switch (operador) {
        case "+": 
            result = valor1 + valor2;
        break;
        case "-": 
            result = valor1 - valor2;
        break;
        case "*": 
            result = valor1 * valor2;
        break;
        case "/": 
            result = valor1 / valor2;
        break;
    }    
    resultado.value = result.toFixed(2);
}
