btnDobrar = document.getElementById("btnDobrar");
txtValor = document.getElementById("txtValor");
txtResultado = document.getElementById("txtResultado");

btnDobrar.addEventListener("click", dobrarValor);

function dobrarValor() {
  txtResultado.value = txtValor.value * 2;
}