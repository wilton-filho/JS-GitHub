// Passo 1: Ler o nome completo do usuario
// Exemplo: nome = "Wilton de Paula Filho"
nome = prompt("Digite o seu nome completo:","Wilton de Paula Filho");

// Passo 2: Converter todas as letras para minúsculas
// Exemplo: nome = "wilton de paula filho"
nome = nome.toLowerCase();

// Passo 3: Separar as partes (palavras) do nome
// Exemplo: nome = ["wilton","de","paula","filho"]
nome = nome.split(" ");

// Passo 4: nome = ["WILTON","de","paula","filho"] 
nome[0] = nome[0].toUpperCase();

// Passo 5: Juntar todas as palavras do vetor numa unica string
// Exemplo: ["WILTON","de","paula","filho"] => "WILTON de paula filho"
nome = nome.join(" ");
alert(nome)