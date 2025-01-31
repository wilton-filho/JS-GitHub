window.addEventListener("DOMContentLoaded", function () {
    const box = document.getElementById("box");
    const p = document.getElementById("info");

    box.addEventListener("mouseenter", function () {
        // p.innerHTML = "entrei na caixa"
        p.innerHTML = `${getComputedStyle(box).textAlign} ${getComputedStyle(box).margin}`;
        // box.classList.remove("mouseOut");
        // box.classList.add("mouseIn");
        //box.classList.replace("mouseOut","mouseIn");
    })

    box.addEventListener("mouseout", function () {
        // box.classList.remove("mouseIn");
        // box.classList.add("mouseOut");
        //box.classList.replace("mouseIn", "mouseOut");
        alertWifi("Olá, tudo bem?", false, 4, "img/logo.png", 30, "");
        // alert("wilton")
    })
})