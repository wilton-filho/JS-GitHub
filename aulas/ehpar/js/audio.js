function tocarAudio(tocar) {
    var audio = document.getElementById("somJogo");
    var source = audio.querySelector("source");

    audio.pause();
    source.src = tocar;
    audio.load();
    audio.play();
}