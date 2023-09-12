btn = document.getElementById("btnTeste")

// A funcao foi colocada diretamente aqui sem o nome dela, pois não há necessidade mais do nome
function exibirMsg(msg) {
    alert(msg);
}

btn.onclick = function () { exibirMsg("Clicou!"); }
btn.onmouseover = function () { exibirMsg("Passou o mouse!"); }
btn.onmouseout = function () { exibirMsg("Tirou o mouse!"); }

