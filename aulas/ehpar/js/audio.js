function tocarAudio(tocar) {
    var audio = document.querySelector("audio");
    var source = audio.querySelector("source");

    audio.pause();
    source.src = tocar;
    audio.load();
    audio.play();
}