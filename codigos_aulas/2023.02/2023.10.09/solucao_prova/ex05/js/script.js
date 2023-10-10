imgs = ['candidato0.png','candidato1.png','candidato2.png','candidato3.png']
nomes = ['Jair Bolsonaro', 'Luiz Inácio Lula da Silva', 'Ciro Gomes', 'Simone Tebet'];
partidos = ['PL','PT','DT','MDB'];

function main() {
    var candidatos = [0,1,2,3];
    
    indiceCandSorteado1 = candidatos.splice(parseInt(Math.random()*candidatos.length), 1);
    indiceCandSorteado2 = candidatos.splice(parseInt(Math.random()*candidatos.length), 1);          

    voto = parseFloat(Math.random()*100).toFixed(2); // 1 a 100

    exibirCandidado(1, indiceCandSorteado1, voto);
    exibirCandidado(2, indiceCandSorteado2, (100-voto).toFixed(2));

    if (voto > 50) {
        document.getElementById("candVencedor").innerHTML = nomes[indiceCandSorteado1];
        document.getElementById("votosVencedor").innerHTML = voto;
    }
    else {
        document.getElementById("candVencedor").innerHTML = nomes[indiceCandSorteado2];
        document.getElementById("votosVencedor").innerHTML = (100-voto).toFixed(2);
    }
}

function exibirCandidado(nroCandidato, indice, nroVotos) {
    document.getElementById(`imgCandidato${nroCandidato}`).src=`img/${imgs[indice]}`;
    document.getElementById(`nomeCand${nroCandidato}`).innerHTML = nomes[indice];
    document.getElementById(`partidoCand${nroCandidato}`).innerHTML = partidos[indice];
    document.getElementById(`resultCand${nroCandidato}`).innerHTML = nroVotos;
}
main();
