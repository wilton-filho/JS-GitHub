window.addEventListener("DOMContentLoaded",function () {
    const box = document.getElementById("box");
    const boxColor = {in:"green", out:"pink"}
    const p = document.getElementById("info");

    box.addEventListener("mouseenter", function () {
        p.innerHTML = `${getComputedStyle(box).width} <br> ${getComputedStyle(box).textAlign}`;
    })
})