// Cria um objeto de data com a data atual
const dataAtual = new Date();
var diasSemana = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

document.write(`Hoje é ${diasSemana[dataAtual.getDay()]}`);
