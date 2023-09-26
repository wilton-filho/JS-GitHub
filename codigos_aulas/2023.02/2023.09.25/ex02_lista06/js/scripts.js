// Atribui 0 (zero) votos a todos os candidatos
document.getElementById("votosCand1").innerHTML = 0;
document.getElementById("votosCand2").innerHTML = 0;
document.getElementById("votosCand3").innerHTML = 0;
document.getElementById("votosCand4").innerHTML = 0;

var vetVotos = [0,0,0,0];

// Acessar todos as fotos dos candidatos
var fotoCand1 = document.getElementById("fotoCand1");
var fotoCand2 = document.getElementById("fotoCand2");
var fotoCand3 = document.getElementById("fotoCand3");
var fotoCand4 = document.getElementById("fotoCand4");

// Atribuindo a cada foto um evento do tipo click
fotoCand1.addEventListener("click", function () {addVotoCand(1)});
fotoCand2.addEventListener("click", function () {addVotoCand(2)});
fotoCand3.addEventListener("click", function () {addVotoCand(3)});
fotoCand4.addEventListener("click", function () {addVotoCand(4)});

// Objetivo: adicionar 1 voto a cada candidato ao clicar sobre ele;
function addVotoCand(nroCand) {
    document.getElementById(`votosCand${nroCand}`).innerHTML = ++vetVotos[nroCand-1];
}
