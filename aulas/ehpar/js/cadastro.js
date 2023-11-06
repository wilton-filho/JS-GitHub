window.addEventListener("load", function () {

    document.getElementById("btnNewUser").addEventListener("click", validarCadastro);
    document.getElementById("user").addEventListener("keypress", function () {
        tocarAudio("audio/tecla.mp3")
    });
    document.getElementById("pwd").addEventListener("keypress", function () {
        tocarAudio("audio/tecla.mp3")
    });    
    document.getElementById("confPwd").addEventListener("keypress", function () {
        tocarAudio("audio/tecla.mp3")
    });    

    function validarCadastro() {
        user = document.getElementById("user");
        pwd = document.getElementById("pwd");
        confPwd = document.getElementById("confPwd");

        if (!user.value) {
            tocarAudio("audio/msgErro.mp3"); 
            alertWifi(`Usuário em branco. Informe um usuário`, false, 0, "img/logo.png", 30, "");
        }
        else if (!pwd.value) {
            tocarAudio("audio/msgErro.mp3");  
            alertWifi(`Senha em branco. Informe uma senha`, false, 0, "img/logo.png", 30, "");
        }
        else if (!confPwd.value) {
            tocarAudio("audio/msgErro.mp3"); 
            alertWifi(`Confirmar senha em branco. Informe uma senha`, false, 0, "img/logo.png", 30, "");
        }
        else if (pwd.value != confPwd.value) {
            tocarAudio("audio/msgErro.mp3"); 
            alertWifi(`Senha e confirmar senha diferentes. Tente novamente!`, false, 0, "img/logo.png", 30, "");
        }
        else cadastrarNovoUsuario(user.value, pwd.value);
    }

    function cadastrarNovoUsuario(user, pwd) {
        var usuario = {nome:user, senha:pwd};
        
        var usuarios = localStorage.getItem("usuarios");

        if (!usuarios) {
            usuarios = [usuario];
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            alertWifi(`Usuário cadastrado com sucesso!`, false, 0, "img/logo.png", 30, "");
        }
        else if (podeCadastrar(user)) {
            usuarios = JSON.parse(usuarios);
            usuarios.push(usuario);
            localStorage.setItem("usuarios",JSON.stringify(usuarios));
            alertWifi(`Usuário cadastrado com sucesso!`, false, 0, "img/logo.png", 30, "");
        }
        else  {
            tocarAudio("audio/msgErro.mp3"); 
            alertWifi(`Esse usuário já existe. Tente outro!`, false, 0, "img/logo.png", 30, "");
        }
    }

    // Verifica se já há um usuario cadastrado com o mesmo nome informado na interface 
    // Retorno: true (pode cadastrar) e false (caso contrario)
    function podeCadastrar(user) {
        var usuarios = localStorage.getItem("usuarios");
        usuarios = JSON.parse(usuarios);
        var achou = false;
        for (i=0; i<usuarios.length; i++)
            if (usuarios[i].nome == user) {
                achou = true;
                break;
            }
        return !achou
    }
});
