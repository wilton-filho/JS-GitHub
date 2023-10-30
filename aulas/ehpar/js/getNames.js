function setNames() {
    usr1 = document.getElementById("user1").value.trim();
    usr2 = document.getElementById("user2").value.trim();
    if (usr1=="") usr1 = "Jogador 1";
    if (usr2=="") usr2 = "Jogador 2";
    users = {user1: usr1, user2: usr2};

    if (typeof(localStorage) !== 'undefined') {
        localStorage.setItem("users", JSON.stringify(users));
        window.open('jogo.html','_self');
    } else {
        alertWifi(`Esses nomes não poderão ser utilizados. Bom jogo!`, false, 0, "img/morreu.gif", 30, "");
    }
}