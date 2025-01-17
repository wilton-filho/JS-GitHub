window.addEventListener("DOMContentLoaded",function () {

    var txtInfo = document.getElementById("txtInfo");
    var btnValidar = document.getElementById("btnValidar");

    btnValidar.addEventListener("click", function () {
        // var padrao = /\d/; // Valida se há nro em qq lugar
        // var padrao = /^\d/; // Valida se há nro no INICIO
        // var padrao = /\d$/; // Valida se há nro no FIM
        // var padrao = /^\d$/; // Valida se há 1 UNICO
        // var padrao = /^\d\d\d\d\d-\d\d\d\d$/; // Valida se há 1 UNICO
        // var padrao = /^\d{5}-\d{4}$/; // Valida nro de telefone
        // var padrao = /^\(\d{2,3}\)\d{4,5}-\d{4}$/;
        // var padrao = /^\d{2}\/\d{2}\/\d{4}$/;
        // var padrao = /^\d{2}\.\d{3}-\d{3}$/

//    var padrao = /^[Ii][Ff][Tt][Mm]-\d{4,6}-(TSPI|LCO|MKT):\d[A-Z]$/;
//    var padrao = /^(I|i)(F|f)(T|t)(M|m)-\d{4,6}-(TSPI|LCO|MKT):\d[A-Z]$/;

        // var padrao = /^(M|F|m|f)$/;
        // var padrao = /^(M|F|Masculino|Feminino)$/i;

        // var padrao = /^IFTM\s{1,3}TSPI$/;
        // var padrao = /^IFTM\s{1,}TSPI$/;
        var padrao = /^IFTM\s?(TSPI|LCO|MKT)?$/;

        // IFTM TSPI

        // var padrao = /^[abdce]{2,}$/i;
        // var padrao = /^[0-9a-f]+$/i; // Padrao para hexadecimal

        // var padrao = /^$/;

        // var padrao = /^[^*+-]+$/;

        // {0,1} => ?
        // {1,} => +

        // var padrao = /^\d{2}:\d{2}:\d{2}$/;
        // var padrao = /^[A-z]{4,}\d{2,4}[^\w]{2}$/;
        var padrao = /^[A-z]{4,}\d{2,4}\W{2}$/;


        if (padrao.test(txtInfo.value))
            alert("válido");
        else
            alert("invalido")

    })

})