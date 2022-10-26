
//------------------------------------------------------------------------------------------
// Verifica se todos os dados do formulario foram preenchidos e chama uma funcao para ler e
// processar um arquivo JSON
function validateCadastro() {
    user = document.getElementById("user");
    pwd = document.getElementById("pwd");
    confPwd = document.getElementById("confPwd");

    if (!user.value) {
        alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "img/morreu.gif", 30);
        user.focus();
    }
    else if (!pwd.value) {
        alertWifi(`Senha em branco. Informe uma senha`, false, 0, "img/morreu.gif", 30);
        pwd.focus();
    }
    else if (!confPwd.value) {
        alertWifi(`Confirmar senha em branco. Informe uma senha`, false, 0, "img/morreu.gif", 30);
        pwd.focus();
    }
    else if (pwd.value != confPwd.value) {
        alertWifi(`Senha e confirmar senha diferentes. Tente novamente`, false, 0, "img/morreu.gif", 30);
    }
    else recordNewUser(user.value, pwd.value);
}

//------------------------------------------------------------------------------------------
// Lê um arquivo JSON e chama um funcao (checkUser) para processar o arquivo JSON lido
function recordNewUser(user, pwd) {
    // Acessando JSON local
    file = "json/users.json";

    // Acessando JSON de um servidor
    //file = 'https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json';
    fetch(file)
        .then(response => response.json())
        .then(content => checkUserCadastro(content, user, pwd))
        .catch(err => alertWifi(`Problemas na leitura do JSON!`, false, 0, "img/morreu.gif", 30));
}

//------------------------------------------------------------------------------------------
// Analisa se o usuario e senha informados no formulário (interface) estão presentes na estrutura JSON lida na função readJSON()
function checkUserCadastro(content, user, pwd) {
    var achou = false;
    for (i = 0; i < content.usuarios.length; i++) {
        if ((content.usuarios[i].user == user) && (content.usuarios[i].pwd == pwd)) {
            achou = true;
            break;
        }
    }
    if (achou) alertWifi(`Esse usuário já existe. Tente outro!!!`, false, 0, "img/toupeira.gif", 30);
    else {
        document.getElementsByTagName("form")[0].submit();
    }//alertWifi(`Esse usuário não existe. Que pena!`, false, 0, "img/morreu.gif", 30);
}


