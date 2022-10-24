function validateForm(idUser, idPwd) {
    user = document.getElementById(idUser);
    pwd = document.getElementById(idPwd);

    if (!user.value) {
        alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "", 30);
        user.focus();
    }
    else if (!pwd.value) {
        alertWifi(`Senha em branco. Informe uma senha`, false, 0, "", 30);
        pwd.focus();
    }
    else {
        //alertWifi(`Sucesso no preenchimento!`, false, 0, "", 30);
        console.log(readJSON(user.value, pwd.value));
    }
}
function readJSON(user, pwd) {
    file = '../json/users.json';
    fetch(file)
        .then(response => response.json())
        .then(content => checkUser(content, user, pwd))
        .catch(err => console.log("erro na leitura do JSON"));
}
function checkUser(content, user, pwd) {
    var achou = false;
    for (i=0; i<content.usuarios.length; i++) {
        if ((content.usuarios[i].user == user) && (content.usuarios[i].pwd == pwd)) {
            achou = true;
            break;
        }
    }   
    if (achou) alertWifi(`Usuario existente!`, false, 0, "", 30);
    else alertWifi(`Usuário inexistente!`, false, 0, "", 30);
}


