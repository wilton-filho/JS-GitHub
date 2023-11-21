window.addEventListener("load", function () {
    document.getElementById("btn").addEventListener("click", function () {
        var padrao = /\d/; //expressao regular para validar pelo menos 1 número em qualquer lugar (início, meio e/ou fim)
        var padrao = /^\d/; //expressao regular para validar pelo menos 1 número no início
        var padrao = /^ \d/; //expressao regular para validar uma informacao iniciando com 1 caracter espaco em branco seguido de um número, etc.
        var padrao = /^  \d/; //expressao regular para validar uma informacao iniciando com 2 caracteres espacos em branco seguidos de um número, etc.
        var padrao = /\d$/; // expressao regular para validar uma informação que finaliza com um número
        var padrao = / \d \d$/; // expressao regular para validar "....... 7 8"
        var padrao = /^\d\d-\d\d-\d\d\d\d$/ // valida uma data. Ex: 00-00-0000
        var padrao = /^\d\d\d\d\d-\d\d\d\d$/; // valida um telefone. Ex: 00000-0000
        var padrao = /\d\d\d-\d\d\d-\d\d\d-\d\d/; // valida o CPF. 000-000-000-00
        var padrao = /^\d{5}-\d{4}$/; // valida um telefone. Ex: 00000-0000
        var padrao = /^\d{4,5}-\d{4,}$/; // valida um telefone. Ex: 00000-0000 ou 0000-0000
        var padrao = /^[02468]{1,2}$/; // Valida de 1 a 2 números compostos pelos dígitos: 0, 2, 4, 6 e 8
        var padrao = /^[aeiou]$/; // Valida qualquer texto contendo apenas uma vogal
        var padrao = /^[abn ]{3,}$/i; // Valida qualquer texto composto pelas letras a, b, n e o espaço em branco (no mínimo 3 desses caracteres)
        var padrao = /^[A-z]$/; // Valida qualquer texto contendo apenas letras de A a Z (maiusculas e/ou minusculas)
        var padrao = /^(regular|ruim|bom|excelente)$/i; // Valida um destes 4 textos: regular ou ruim ou bom ou excelente
        var padrao = /^IFTM-[6-9]{4,6}-(TSPI|LCO|MKT):\d\s?[a-fv-z]$/i;
        var padrao = /^\w{4}$/; // Valida qualquer texto contendo 4 letras e/ou nros (alfanuméricos)
        var padrao = /^\W{4}$/; // Valida qualquer texto contendo 4 letras e/ou nros (alfanuméricos)
        var padrao = /^\D{4}$/;  // valida qualquer texto contendo tudo exceto digitos (numeros)
        var padrao = /^\d{5}-\d{4}$/; // valida um telefone. Ex: 00000-0000
        var padrao = /^\(\d{2}\)$/; // valida o ddd de um telefone. Ex: (34)
        var padrao = /^\d{2}\.\d{3}-\d{3}$/; // valida cep. Ex: 38.000-000 (veja que foi necessário colocar \. na expressao para aceitar o .)

        var info = document.getElementById("txt").value;

        if (padrao.test(info))
            alert("válido")
        else 
            alert("inválido")
    })
});