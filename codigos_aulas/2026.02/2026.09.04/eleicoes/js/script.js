// Inicialização do programa
// votosCands: vetor utilizado p/ armazenar a qtidade de votos dos candidatos
votosCands = [];

const TOTAL_CAND = document.querySelectorAll(".boxCandidato").length;
for (i=0; i<TOTAL_CAND; i++) {
    votosCands.push(0);
    document.getElementById("votosCand"+(i+1)).innerHTML = votosCands[i];
}

// Manipuladores de eventos
for (let i=0; i<TOTAL_CAND; i++) {
    document.getElementById("btnIncrementar"+(i+1)).addEventListener(
        "click", function () {
            incrementarVotos(i+1);
        }
    );  
}
// Funções
function incrementarVotos(nroCand) {
    votosCands[nroCand-1]++;
    document.getElementById("votosCand"+nroCand).innerHTML =        votosCands[nroCand-1];
}
