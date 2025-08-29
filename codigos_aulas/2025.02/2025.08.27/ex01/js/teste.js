nome = prompt("Digite o seu nome completo?","Wilton de Paula Filho");

opcao = prompt("[MENU]"+ 
    "\n[1] Letras Maiúsculas"+
    "\n[2] Letras Minúsculas"+
    "\n[3] Primeira letra do primeiro nome maiúscula "+
    "\n[4] Primeiro nome "+
    "\n[5] Primeiro nome maiúsculo e último nome minúsculo"+
    "\n[6] Substitua o primeiro nome por um novo nome "+
    "\n[7] Primeira letra do primeiro nome e do ultimo nome maiusculas concatenadas"+
    "\n[8] Exiba as 3 primeiras letras do nome ");

switch (opcao) {
    case "1":
        document.write(`<p>${nome.toUpperCase()}</p>`);
    break;
    case "2":
        document.write(`<p>${nome.toLowerCase()}</p>`);
    break;
    case "3":
        document.write(`<p>${nome.charAt(0)}</p>`);
    break;
    case "4":
        document.write(`<p>${nome.split(' ')[0]}</p>`);
    break;
    case "5":
        vetorNome = nome.split(' ');
        document.write(`<p>${vetorNome[0].toUpperCase()} ${vetorNome[vetorNome.length-1].toLowerCase()}</p>`);
    break;
    case "6":
        novoNome = prompt("Qual o novo nome?");
        vetorNome = nome.split(' ');
        vetorNome[0] = novoNome;
        document.write(`<p>${vetorNome.join(' ')}</p>`);
    break;
    case "7":
        vetorNome = nome.split(' ');
document.write(`<p>${vetorNome[0].chatAt(0)}${vetorNome[vetorNome.length-1].chatAt(0)}</p>`);
    break;
    case "8":
        document.write(`<p>${nome.subtring(0,3)}</p>`);
    break;
}

//Exemplos:
//nome = "Wilton de Paula Filho"
// [1] "WILTON DE PAULA FILHO"
// [2] "wilton de paula filho"
// [3] "W"
// [4] "Wilton"
// [5] "WILTON filho"
// [6] Qual o novo nome? "Joao" -> "Joao de Paula Filho"
// [7] "WF"
// [8] "Wil"
