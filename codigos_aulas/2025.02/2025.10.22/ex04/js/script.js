window.addEventListener("DOMContentLoaded", function () {
    
    function showMsg(txt1, txt2) {
        alert(`${txt1} ${txt2}`);
    }
    
    function main() {

        // showMsg("Hello, World!");
        // showMsg("Prof. Wilton Filho");

        // Opcao 1:
        // setTimeout(function () {
        //     showMsg("Hello, World!");
        // }, 2000);

        // Opcao 2
        setTimeout(showMsg, 2000, "Professor", "Wilton Filho");

    }

    main();
})