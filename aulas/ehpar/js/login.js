window.addEventListener("load", function () {

    document.getElementById("btnLogin").addEventListener("click", validarLogin);
    document.getElementById("user").addEventListener("keypress", function () {
        tocarAudio("audio/tecla.mp3")
    });
    document.getElementById("pwd").addEventListener("keypress", function () {
        tocarAudio("audio/tecla.mp3")
    });

    function validarLogin() {
        var user = document.getElementById("user");
        var pwd = document.getElementById("pwd");
    
        if (!user.value) {
            tocarAudio("audio/msgErro.mp3")
            alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "img/logo.png", 30, "");
        }
        else if (!pwd.value)  {
            tocarAudio("audio/msgErro.mp3")
            alertWifi(`Senha em branco. Informe uma senha`, false, 0, "img/logo.png", 30, "");
        }
        else 
            processarLogin(user.value, pwd.value);
    }

    function processarLogin(user, pwd) {
        if (typeof(Storage) != "undefined") {
            usuarios = localStorage.getItem("usuarios");
            if (!usuarios)  {
                tocarAudio("audio/msgErro.mp3");
                alertWifi(`Usuário inexistente. Tente um usuário diferente!`, false, 0, "img/logo.png", 30, "");
            }
            else {
                var usuarios = JSON.parse(usuarios);
                var achou = false;
                for (i=0; i<usuarios.length; i++)
                    if (usuarios[i].nome == user && usuarios[i].senha == pwd) {
                        achou = true;
                        break;
                    }
                if (achou) window.open("jogo.html","_self");
                else  {
                    tocarAudio("audio/msgErro.mp3");
                    alertWifi(`Usuário inexistente. Tente um usuário diferente!`, false, 0, "img/logo.png", 30, "");
                }
            }
        }
        else  {
            tocarAudio("audio/msgErro.mp3");
            alertWifi(`Problemas no navegador. Não será possível executar o jogo!`, false, 0, "img/logo.png", 30, "");
        }
    }
});


//------------------------------------------------------------------------------------------
// Verifica se todos os dados do formulario foram preenchidos e chama uma funcao para ler e
// processar um arquivo JSON


//------------------------------------------------------------------------------------------
// Lê um arquivo JSON e chama um funcao (checkUser) para processar o arquivo JSON lido
// function processLogin(user, pwd) {
//     // Acessando JSON local
//     file = "json/users.json";

//     // Acessando JSON de um servidor
//     //file = "http://profwiltonfilho.atwebpages.com/js/login_cadastro/json/users.json";
    
//     fetch(file)
//         .then(response => response.json())
//         .then(content => checkUserLogin(content, user, pwd))
//         .catch(err => alertWifi(`Problemas na leitura do JSON!`, false, 0, "img/morreu.gif", 30, ""));
// }

//------------------------------------------------------------------------------------------
// Analisa se o usuario e senha informados no formulário (interface) estão presentes na estrutura JSON lida na função readJSON()
// function checkUserLogin(content, user, pwd) {
//     var achou = false;
//     for (i=0; i<content.usuarios.length; i++) {
//         if ((content.usuarios[i].user == user) && (content.usuarios[i].pwd == pwd)) {
//             achou = true;
//             break;
//         }
//     }   
//     if (achou) {
//         if (typeof (localStorage) !== 'undefined') {
//             localStorage.setItem("username", user);
//             window.open('../getNames.html','_self');
//         }
//         else alertWifi(`Que pena! Você não poderá jogar, pois o seu navegador não oferece suporte para este jogo.`, false, 0, "img/morreu.gif", 25, "");
//     }
//     else alertWifi(`Esse usuário não existe. Que pena!`, false, 0, "img/morreu.gif", 30, "");
// }


