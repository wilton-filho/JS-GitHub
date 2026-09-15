nomeCompleto = prompt("Digite o seu nome completo:","Wilton de Paula Filho");

// 1º Passo: Converte tudo para letras minusculas e depois transformar a string em vetor
// Ex: "Wilton de Paula Filho" -> [wilton|de|paula|filho]
nomeCompleto = nomeCompleto.toLowerCase().split(" ");

// 2º Passo:converter a primeira palavra do nome que está na posição 0 do vetor para letras maiúsculas
// Ex: [WILTON|de|paula|filho]
nomeCompleto[0] = nomeCompleto[0].toUpperCase();

// 3º Passo: Converter o vetor numa string
//  [WILTON|de|paula|filho] -> "WILTON de paula filho"
nomeCompleto = nomeCompleto.join(" ");

alert(nomeCompleto);