var veiculos = [
    {imgVeiculo:"civic.jpg", fabricante:"Honda", nome:"Civic", potencia:"150 cv", garantia:"3 anos",consumo:"9,7 km/l"}, 
    {imgVeiculo:"troller.jpg", fabricante:"Ford", nome:"Troller", potencia:"200 cv", garantia:"3 anos",consumo:"7,7 km/l"}
];


// Codigo referente a pagina index.html
function validar() {
    var nome = document.getElementById("txtNome").value;
    var idade = document.getElementById("txtIdade").value;
    var passatempo = document.getElementById("selPassatempo").value;

    var padraoNome = /^[A-Z][a-zA-Z ]{2,29}$/;

    if (!padraoNome.test(nome))
        alert("Nome inválido. Informe um nome começando com uma letra maiúscula (min: 3 e máx:30)");
    else if ((idade < 1) || (idade > 130))
        alert("Idade inválida. >=1 e <= 130");
    else if (passatempo == -1)
        alert("Selecione o passatempo");
    else {
        localStorage.setItem("nomeUser",nome);
        localStorage.setItem("passatempoUser",passatempo);
        window.open("aguarde.html","_self");
    }
}

function configTimer() {
    var nroAleatorio = parseInt(Math.random()*6)+5; // 8
    document.getElementById("tempo").innerHTML = nroAleatorio;
    setTimeout(cronometro, 1000, nroAleatorio);
    //setTimeout ou setInterval
}
function cronometro(nroAleatorio) {
    if (nroAleatorio > 0) nroAleatorio--; // 7
    else window.open("verVeiculo.html","_self");
    document.getElementById("tempo").innerHTML = nroAleatorio;
    if ((nroAleatorio >=0) && (nroAleatorio < 4)) document.getElementById("tempo").style.color = "red";
    setTimeout(cronometro, 1000, nroAleatorio);
}

function mostrarVeiculo() {
    var nomeUser = localStorage.getItem("nomeUser");
    var passatempo = parseInt(localStorage.getItem("passatempoUser"));

    document.getElementById("nomeUser").innerHTML = nomeUser;
    document.getElementById("imgVeiculo").src = `../img/${veiculos[passatempo].imgVeiculo}`;
    document.getElementById("fabricante").innerHTML = veiculos[passatempo].fabricante;
    document.getElementById("nome").innerHTML = veiculos[passatempo].nome;
    document.getElementById("potencia").innerHTML = veiculos[passatempo].potencia;
    document.getElementById("garantia").innerHTML = veiculos[passatempo].garantia;
    document.getElementById("consumo").innerHTML = veiculos[passatempo].consumo;

}