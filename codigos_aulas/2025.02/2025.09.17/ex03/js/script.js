// Declaração das variáveis
btn = document.getElementById("btnDobrar");
valor1 = document.getElementById("txtValor1");
valor2 = document.getElementById("txtValor2");

// Criação dos eventos
btn.addEventListener("click",dobrarValor);

// Implmentações das funções
function dobrarValor() {
    if (valor1.value.trim() == 0)
        alert("Não foi informando nenhum número. Tente novamente!");
    else if (isNaN(valor1.value))
        alert("O valor informado não é um número. Tente novamente!")
    else
        valor2.value = valor1.value * 2;
}