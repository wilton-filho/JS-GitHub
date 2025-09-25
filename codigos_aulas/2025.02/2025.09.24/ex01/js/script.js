function gerarResultado() {

    candidatos = [
        {nome: "Jair Messias Bolsonaro", partido: "PL", img: "candidato1.png"},
        {nome: "Luiz Inácio Lula da Silva", partido: "PT", img: "candidato2.png"},
        {nome: "Ciro Gomes", partido: "PDT", img: "candidato3.png"},
        {nome: "Simone Tebet", partido: "MDB", img: "candidato4.png"}
    ];
    indices = [0,1,2,3];

    candidato1 = indices.splice(Math.floor(Math.random()*4),1)[0];
    candidato2 = indices.splice(Math.floor(Math.random()*3),1)[0];
    sorteio = [candidato1, candidato2];
    nroVotos = parseFloat(Math.floor(Math.random()*100));
    nroVotosCandidatos = [nroVotos, 100-nroVotos];

    for (i=0; i<sorteio.length; i++) {
        document.getElementById(`imgCandidato${i+1}`).src = "img/"+candidatos[sorteio[i]].img;
        document.getElementById(`nomeCandidato${i+1}`).innerHTML = candidatos[sorteio[i]].nome;
        document.getElementById(`nomePartido${i+1}`).innerHTML = "Partido: "+candidatos[sorteio[i]].partido;
        document.getElementById(`resultadoCandidato${i+1}`).innerHTML = nroVotosCandidatos[i].toFixed(1)+"%";
    }

    if (nroVotosCandidatos[0] == nroVotosCandidatos[1])
        document.getElementById("candVencedor").innerHTML = "Empate";
    else if (nroVotosCandidatos[0] > nroVotosCandidatos[1])
        document.getElementById("candVencedor").innerHTML = candidatos[sorteio[0]].nome;
    else 
        document.getElementById("candVencedor").innerHTML = candidatos[sorteio[1]].nome;
}

btnGerarResultado = document.getElementById("btnGerarResultado");
btnGerarResultado.addEventListener("click", gerarResultado);


