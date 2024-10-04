// Cria um objeto de data com a data atual
const dataAtual = new Date();

var diaAtual = dataAtual.getDay(); //0,1,...6

switch (diaAtual) {
    case 0:
        document.write("Hoje é Domingo!");
    break;
    case 1:
        document.write("Hoje é Segunda!");
    break;
    case 2:
        document.write("Hoje é Terça!");
    break;
    case 3:
        document.write("Hoje é Quarta!");
    break;
    case 4:
        document.write("Hoje é Quinta!");
    break;
    case 5:
        document.write("Hoje é Sexta!");
    break;
    default:
        document.write("Hoje é Sábado!");
}