// Solução 1: usando switch
txt = prompt("Digite um texto qualquer:", "O amor é um sentimento sublime. AMOR é entrega desde que o Amor seja verdadeiro");
formatacao = prompt("1) Itálico, 2) Negrito ou 3) Sublinhado");
style='';
switch (formatacao) {
    case '1': 
        style = 'font-style: italic';
    break;
    case '2': 
        style = 'font-weight: bold';
    break;
    case '3': 
        style = 'text-decoration: underline';
    break;
    default:
        style='font-weight: normal';
    break;
}
document.write(`<p style='${style}'>${txt}</p>`);


// Solução 2: usando Array
// txt = prompt("Digite um texto qualquer:", "O amor é um sentimento sublime. AMOR é entrega desde que o Amor seja verdadeiro");
// indice = parseInt(prompt("1) Itálico, 2) Negrito ou 3) Sublinhado"));

// style = ['font-style: italic', 'font-weight: bold', 'text-decoration: underline'];

// if (indice >=1 && indice<=3)
//     document.write(`<p style='${style[indice - 1]}'>${txt}</p>`);
// else alert("Opção inválida. Recarrega a página e tente novamente!");