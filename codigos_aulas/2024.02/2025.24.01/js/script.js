window.addEventListener("DOMContentLoaded",function () {
    var btnValidar = document.getElementById("btnValidar");
    var txtInfo = document.getElementById("txtInfo");

    btnValidar.addEventListener("click", function () {
        // Números binários
        var padrao = /^[01]+$/;

        // Números hexadecimais
        var padrao = /^[A-F0-9]+$/i;

        // Números decimais
        var padrao = /^\d+$/;

        // Números reais (pode haver casas decimais). Ex:“10”, “10,5”, “3.14” (, ou . são aceitos)
        var padrao = /^\d+([.,]\d+)?$/;

        // Horário no formato: 00:00:00
        var padrao = /^[0-5]\d:[0-5]\d:[0-5]\d$/;

        // Data de nascimento: dd/mm/aaaa ou dd/mm/aa
        var padrao = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/;

        // CEP
        var padrao = /^\d{2}\.\d{3}-\d{3}$/;

        // CPF
        var padrao = /^(\d{3}\.){2}\d{3}-\d{2}$/;
        
        // CNPJ
        var padrao = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

        // Números entre parênteses
        var padrao = /^\(\d+\)$/;

        // Email. Padrão esperado: xxx@yyy.ccc (c: poderá ter de 2 a 3 caracteres)
        var padrao = /^[A-z]+\w+@[A-z]+\w+\.[A-z]{2,3}$/i;

        // Endereço (domínio ou IPv4). Ex: 192.168.1.1, 255.255.255.255 (somente nros)
        var padrao = /^(\d{1,3}\.){3}\d{1,3}$/;

        // Altura de uma pessoa. Ex: x,xz ou x.xz (onde z é opcional)
        var padrao = /^([0][.,]\d{1,2}|[12]{1,2}([.,]\d{1,2})?)$/;

        // Nome próprio (letra inicial maiúscula e demais minúsculas). Ex: Wilton
        var padrao = /^[A-Z][a-z]+((\s[A-Z][a-z]+)+)?$/;
        
        // Telefone no padrão internacional. Ex: +xx(xx)xxxxx-xxxx
        var padrao = /^\+\d{2}\(\d{2}\)\d{5}-\d{4}$/;
        
        // Texto: “IFTM campus Uberlândia” ou “IFTM campus Uberlândia Centro”
        var padrao = /^IFTM campus Uberlândia(\sCentro)?$/;

        // Números de 1 a 100
        var padrao = /^(100|[1-9]?\d)$/;

        // Placa de carro (padrão Mercosul)
        var padrao = /^[A-Z]{3}\d[A-Z]\d{2}$/;

        //Palavras contendo vogais e/ou algumas dessas letras: “b”, “c”, “d”. Ex:“dado”, “caco”
        var padrao = /^[aeioubcd]{2,}$/;

        //O faturamento de uma empresa. O valor poderá variar de R$0,00 até         R$999.999.999.999,99 (999 bilhões de reais). Exemplos válidos: R$400,8; R$400,85; R$1.500,41; R$1.500,7; R$5.601.478,10; R$10.524.478.967,70
        var padrao = /^R\$\d+((\.\d+)+)?,\d+$/;

        //Número de matrícula: IFTM-xxx/xxx-yy ou iftm-xxx/xxx-yy. Onde x é um dígito e y um caracter alfanumérico
        var padrao = /^(IFTM|iftm)-\d{3}\/\d{3}-[A-z0-9]{2}$/;

        //Número de matrícula. Único formato permitido: MT-xx.xxx-IFTM. Onde x deverá um dígito, as letras MT deverão ser maiúsculas e as letras IFTM poderão ser tanto maiúsculas quanto minúsculas. 
        var padrao = /^MT-\d{2}\.\d{3}-(I|i)(F|f)(T|t)(M|m)$/;

        //Número de matrícula. Único formato permitido: MT-xx.xxx-IFTM Y. Onde x é um dígito, as letras do padrão poderão ser tanto maiúsculas quanto minúsculas e entre as letras poderá haver no máximo um espaço em branco (ou seja, pode ser que não tenha nenhum) e Y é o nome de um dos seguintes campi UBERLÂNDIA CENTRO ou UBERLÂNDIA (A primeira letra do nome/sobrenome de cada campus deve ser maiúscula e as demais minúsculas).
        var padrao = /^M\s?T-\d{2}\.\d{3}-I\s?F\s?T\s?M Uberlândia(\sCentro)?$/i;

        (padrao.test(txtInfo.value))?alert("Válido"):alert("Inválido!");
    })

})