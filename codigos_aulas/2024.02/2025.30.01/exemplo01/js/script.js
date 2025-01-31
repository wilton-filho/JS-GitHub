window.addEventListener("DOMContentLoaded",function () {
    const box = document.getElementById("box");
    const boxColor = {in:"green", out:"pink"}

    box.addEventListener("mouseenter", function () {
        box.style.backgroundColor = boxColor.in;
    })
    box.addEventListener("mouseout", function () {
        box.style.backgroundColor = boxColor.out;
    })
})