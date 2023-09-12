// Solução 1
//-------------------------------
// function clicar() {
//     alert('clicou em mim!!!');
// }

// function moverMouse() {
//     alert('mouseu o mouse!!!');
// }

// function retirarMouse() {
//     alert('vai não, sô!')
// }

// Solução 2
//-------------------------------
// function mostrarMsg(codigo) {
//     if (codigo == 0) alert('clicou em mim!!!');
//     else if (codigo == 1) alert('mouseu o mouse!!!');
//     else if (codigo == 2) alert('vai não, sô!')
// }

// Solução 3
//-------------------------------
// function mostrarMsg(msg) {
//     alert(msg)
// }

// Obtem o texto proveniente da caixa de texto (input type="text")
function pegarTexto() {
    texto = document.getElementById("txtNome").value.trim();
    if (texto == "")
        alert("Favor inserir um texto");
    else alert(texto.toUpperCase());
}

// Insere o texto "IFTM" dentro da caixa de texto (input type="text")
function inserirTexto() {
    document.getElementById("txtNome").value = "IFTM";
}