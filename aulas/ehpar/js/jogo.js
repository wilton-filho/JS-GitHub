window.addEventListener("load", function () {

    var iniciouJogo = false;
    var idCronTempo = null;
    var idCronNros = null;
    var nivelDificuldade;
    var minutos = 0;
    var segundos = 0;
    var niveis = {
        default: { min: 0, seg: 0, tempo: 0 },
        facil: { min: 1, seg: 30, tempo: 1200 },
        medio: { min: 1, seg: 15, tempo: 700 },
        dificil: { min: 0, seg: 30, tempo: 500 }
    };
    var pontuacao = {
        acertos: 0,
        erros: 0,
        qtidadePares: 0,
        percentualAcertos: 0
    }

    document.getElementById("nivel").addEventListener("change", mudarTempo);
    document.getElementById("btnIniciar").addEventListener("click", iniciarJogo);
    document.getElementById("btnPausar").addEventListener("click", pausarJogo);
    document.getElementById("btnParar").addEventListener("click", pararJogo);
    document.getElementById("btnSair").addEventListener("click", function () {window.open("index.html","_self")});
    document.getElementById("nroSorteado").addEventListener("click", conferir);
    habilitarBtns(true, false, false);

    // Zera as variaveis que controlam a pontuacao do jogo
    function zerarPontuacao() {
        pontuacao.acertos = 0;
        pontuacao.erros = 0;
        pontuacao.qtidadePares = 0;
        pontuacao.percentualAcertos = 0;
    }

    // Atualiza a pontuacao do jogo na interface
    function atualizarPontuacaoInterface() {
        document.getElementById("acertos").innerHTML = pontuacao.acertos;
        document.getElementById("erros").innerHTML = pontuacao.erros;
        document.getElementById("qtidadePares").innerHTML = pontuacao.qtidadePares;
        document.getElementById("percentualAcertos").innerHTML = pontuacao.percentualAcertos + "%";
    }

    // Altera o valor do tempo baseado no nivel de dificuldade
    function mudarTempo() {
        if (iniciouJogo) {
            var nivel = document.getElementById("nivel").selectedIndex;
            pararJogo();
            document.getElementById("nivel").selectedIndex = nivel;
        }
        var nivelInterface = document.getElementById("nivel").value;
        var nivel = niveis.default;

        tocarAudio("audio/select.mp3");

        switch (nivelInterface) {
            case "facil":
                nivel = niveis.facil;
                break;
            case "medio":
                nivel = niveis.medio;
                break;
            case "dificil":
                nivel = niveis.dificil;
                break;
        }
        alterarTempoInterface(nivel);
    }

    function alterarTempoInterface(nivel) {
        minutos = nivel.min;
        segundos = nivel.seg;
        nivelDificuldade = nivel.tempo;
        atualizaPainelTempo();
    }

    function atualizaPainelTempo() {
        document.getElementById("min").innerHTML = (String(minutos).length == 1)?"0"+minutos:minutos;
        document.getElementById("seg").innerHTML = (String(segundos).length == 1)?"0"+segundos:segundos;
    }

    function iniciarJogo() {
        iniciouJogo = true;
        if (document.getElementById("nivel").value != "selecione") {
            habilitarBtns(false, true, true);
            tocarAudio("audio/start.mp3");
            idCronNros = setInterval(trocarNro, nivelDificuldade);
            idCronTempo = setInterval(atualizarTempo, 1000);
        }
        else {
            tocarAudio("audio/msgErro.mp3");
            alertWifi(`Para iniciar, selecione o nível de dificuldade!`, false, 0, "img/logo.png", 30, "");
            document.getElementById("nivel").focus();
        }
    }

    function trocarNro() {
        var nro = parseInt(Math.random() * 100) + 1;
        animarPontuacao("");

        document.getElementById("nroSorteado").style.color = "black";
        document.getElementById("nroSorteado").innerHTML = nro;

        if (nro % 2 == 0) pontuacao.qtidadePares++;
        pontuacao.percentualAcertos = ((pontuacao.acertos / pontuacao.qtidadePares) * 100).toFixed(1);
        atualizarPontuacaoInterface();
    }

    function conferir() {
        if (iniciouJogo) {
            var valor = parseInt(document.getElementById("nroSorteado").innerHTML);
            if (document.getElementById("btnIniciar").disabled) {
                if (valor % 2 == 0) {
                    tocarAudio("audio/sucesso.mp3");
                    pontuacao.acertos++;
                    atualizarPontuacaoInterface();
                    document.getElementById("nroSorteado").style.color = "green";
                }
                else if (valor % 2 == 1) {
                    tocarAudio("audio/erro.mp3");
                    pontuacao.erros++;
                    atualizarPontuacaoInterface();
                    document.getElementById("nroSorteado").style.color = "red";
                    animarPontuacao("shakeNumber");
                }
            }
        }
    }

    function animarPontuacao(classe) {
        document.getElementById("nroSorteado").className = "";
        if (classe != "") document.getElementById("nroSorteado").classList.add(classe);
    }

    function pausarJogo() {
        habilitarBtns(true, false, true);
        clearInterval(idCronNros);
        clearInterval(idCronTempo);
    }

    function pararJogo() {
        alterarTempoInterface(niveis.default);
        document.getElementById("nivel").selectedIndex = 0;
        document.getElementById("nroSorteado").innerHTML = "_";
        zerarPontuacao();
        atualizarPontuacaoInterface();
        pausarJogo();
        habilitarBtns(true, false, false);
        iniciouJogo = false;
    }

    function atualizarTempo() {
        segundos--;
        if (segundos == 0 && minutos == 0) {
            clearInterval(idCronNros);
            clearInterval(idCronTempo);
            iniciouJogo = false;
            tocarAudio("audio/endGame.mp3");
            alertWifi(`Fim de jogo!`, false, 0, "img/logo.png", 30, "");
        }
        else {
            if (segundos == -1) {
                minutos--;
                segundos = 59;
            }
        }
        atualizaPainelTempo();
    }

    function habilitarBtns(btnPlay, btnPause, btnStop) {
        document.getElementById("btnIniciar").disabled = !btnPlay;
        document.getElementById("btnPausar").disabled = !btnPause;
        document.getElementById("btnParar").disabled = !btnStop;
    }
});