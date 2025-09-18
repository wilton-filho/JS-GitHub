//x = 11;

// if (x % 2 == 0)
//     alert("Par");
// else 
//     alert("Impar");

// Operador ternário
//(x % 2 == 0)?alert("Par"):alert("Impar");

//x = 46;

// if (x % 2 == 0)
//     resultado = x * 2;
// else 
//     resultado = x * 3;

//resultado = (x % 2 == 0)?x * 2:x * 3;

//alert(resultado);


function verificarMegaSena(nroSorteados, nroUser) {
    // if (nroSorteados.indexOf(nroUser) == -1)
    //     return false;
    // else
    //     return true;
    //return (nroSorteados.indexOf(nroUser) == -1)?false:true;

    return nroSorteados.includes(nroUser);
}

nroSorteados = [10,58,7,33,14,9];
nroUser = parseInt(prompt("Qual numero deseja verificar?"));

alert(verificarMegaSena(nroSorteados, nroUser));

