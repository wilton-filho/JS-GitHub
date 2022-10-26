//------------------------------------------------------------------------------------------
// Verifica se todos os dados do formulario foram preenchidos e chama uma funcao para ler e
// processar um arquivo JSON
function validateLogin() {
    user = document.getElementById("user");
    pwd = document.getElementById("pwd");

    if (!user.value) {
        alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "img/morreu.gif", 30);
        user.focus();
    }
    else if (!pwd.value) {
        alertWifi(`Senha em branco. Informe uma senha`, false, 0, "img/morreu.gif", 30);
        pwd.focus();
    }
    else processLogin(user.value, pwd.value);
}

//------------------------------------------------------------------------------------------
// Lê um arquivo JSON e chama um funcao (checkUser) para processar o arquivo JSON lido
function processLogin(user, pwd) {
    // Acessando JSON local
    file = "json/users.json";

    // Acessando JSON de um servidor
    //file = 'https://wilton-filho.github.io/JS-GitHub/aulas/jogo/login/json/users2.json';
    
    fetch(file)
        .then(response => response.json())
        .then(content => checkUserLogin(content, user, pwd))
        .catch(err => alertWifi(`Problemas na leitura do JSON!`, false, 0, "img/morreu.gif", 30));
}

//------------------------------------------------------------------------------------------
// Analisa se o usuario e senha informados no formulário (interface) estão presentes na estrutura JSON lida na função readJSON()
function checkUserLogin(content, user, pwd) {
    var achou = false;
    for (i=0; i<content.usuarios.length; i++) {
        if ((content.usuarios[i].user == user) && (content.usuarios[i].pwd == pwd)) {
            achou = true;
            break;
        }
    }   
    if (achou) alertWifi(`Login válido. Ihuuuulll!`, false, 0, "img/toupeira.gif", 30);
    else alertWifi(`Esse usuário não existe. Que pena!`, false, 0, "img/morreu.gif", 30);
}


