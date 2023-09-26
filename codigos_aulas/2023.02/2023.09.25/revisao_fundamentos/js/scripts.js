// Fundamento 1: inputar um valor numa caixa de texto após o carregamento da página
var caixaTxt = document.getElementById("txtValor");
caixaTxt.value = "Wilton Filho";

// Fundamento 2: adicionar o evento de click ao botão da interface
var btn = document.getElementById("btnTestar"); // obtem o botão da interface
btn.addEventListener("click", exibirValor);     // adiciona o evento click ao botao

// Funcao a ser executada ao clicar sobre o botao (<input type="button"> no HTML)
function exibirValor() {
    // Fundamento 3: exibir texto de uma caixa de texto no parágrafo
    document.getElementById("texto").innerHTML = caixaTxt.value;
    alert(caixaTxt.value)
}

// // Funcao a ser executada ao clicar sobre o botao (<button> no HTML)
// function exibirValor(event) {
//     event.preventDefault();
//     // Fundamento 3: exibir texto de uma caixa de texto no parágrafo
//     document.getElementById("texto").innerHTML = caixaTxt.value;
// }

// Fundamento 4: atributo event para tratar o evento gerado pelo elemento
// Adicionar o evento de pressionar tecla dentro da caixa de texto
caixaTxt.addEventListener("keyup", exibirTxt);
function exibirTxt(event) {
    // document.getElementById("texto").innerHTML = caixaTxt.value;
    // A instrução acima tem o mesmo efeito da instrução abaixo
    document.getElementById("texto").innerHTML = event.target.value;
}





