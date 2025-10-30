window.addEventListener("DOMContentLoaded", function () {
  
    let btnPlay = document.getElementById("btnPlay");
    let btnPause = document.getElementById("btnPause");
    let btnStop = document.getElementById("btnStop");
    let minutosInterface = document.getElementById("minutos");
    let segundosInterface = document.getElementById("segundos");
    
    let minutos;
    let segundos;
    let idCronometro;

    btnPlay.addEventListener("click", function () {
        idCronometro = setInterval(play, 1000);
        btnPlay.disabled = true;
        btnPause.disabled = false;
        btnStop.disabled = false;
    });

    btnPause.addEventListener("click", function () {
        clearInterval(idCronometro);
        btnPlay.disabled = false;
        btnPause.disabled = true;
        btnStop.disabled = false;
    });
    
    btnStop.addEventListener("click", function () {
        zerarCronometro();
        clearInterval(idCronometro);
    });
        
    function zerarCronometro() {
        minutos = segundos = 0;
        minutosInterface.innerHTML = "0" + minutos;
        segundosInterface.innerHTML = "0" + segundos;
        btnPlay.disabled = false;
        btnPause.disabled = true;
        btnStop.disabled = true;
    }

    function main() {
        zerarCronometro();
    }

    function play() {
        segundos++;
        if (segundos == 60) {
            segundos = 0;
            minutos++;
            if (minutos >=0 && minutos <= 9) minutos = "0" + minutos;
            minutosInterface.innerHTML = minutos;
        }
        if (segundos >=0 && segundos <= 9) segundos = "0" + segundos;
        segundosInterface.innerHTML = segundos;
    }

    main();
})

















/*function mostrarNroAleatorio() {
        console.log(Math.random()); // Nro aleatorio entre 0 e 0.99999
    }

    function main() {
        // setTimeout: espera 2000 milessegundos (2s) para executar a funcao "mostrarNroAleatorio" uma unica vez
        //setTimeout(mostrarNroAleatorio, 2000); 

        // setInterval: executa a funcao "mostrarNroAleatorio" a cada 2000 milissegundos (2s)
        //setInterval(mostrarNroAleatorio, 2000); 
    }*/