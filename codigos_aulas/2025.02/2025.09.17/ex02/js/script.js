btnDobrar = document.getElementById("btnDobrar");
txtValor = document.getElementById("txtValor");

btnDobrar.addEventListener("click", dobrarValor);

function dobrarValor() {
    if (txtValor.value.trim() == "")
        alert("O campo está em branco. Informe um número");
    else if (isNaN(txtValor.value))
            alert("Você não informou um número. Informe apenas números");
        else 
            alert(txtValor.value*2);
}


// function dobrarValor() {
//     valor = prompt("Digite um valor:");
//     alert(valor*2);
// }