var sexo = document.getElementById("sexo");


// sexo.addEventListener("change",function () {
//     //alert(sexo.value)
//     if (sexo.value == "selecione")
//         alert("Favor selecionar o sexo")
//     else alert("...")
// })

sexo.addEventListener("change",function () {
    if (sexo.selectedIndex == 0)
        alert("Selecione o sexo")
    else alert("Sexo selecionado")
})