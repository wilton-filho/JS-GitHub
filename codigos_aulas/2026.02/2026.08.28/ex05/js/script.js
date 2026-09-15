nota1 = document.getElementById("txtNota1");
nota2 = document.getElementById("txtNota2");
btnResultado = document.getElementById("btnResultado");

btnResultado.addEventListener("click",calcularResultado);
btnResultado.addEventListener("mouseenter",mudarCursor);

function mudarCursor() {
    btnResultado.style.cursor = "pointer";
}

function calcularResultado() {
    notaFinal = parseFloat(nota1.value) + parseFloat(nota2.value);
    if (notaFinal >= 60)
        alert(`Aprovado!`);
    else
        alert(`Reprovado. Faltou(ram) ${60-notaFinal} ponto(s)!`);
}