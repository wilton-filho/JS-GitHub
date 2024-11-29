var usuarios = [
    {username: "Wilton", password:"123"},
    {username: "Ana", password:"456"}
];

var txtUser = document.getElementById("txtUser");
var txtPwd = document.getElementById("txtPwd");
var btnCadastrar = document.getElementById("btnCadastrar");

btnCadastrar.addEventListener("click", function () {
    var newUser = {username:txtUser.value, password:txtPwd.value};
    var users = localStorage.getItem("users");

    // 1a situação: cadastrar o primeiro usuario (criar a chave)
    if (!users) {
        localStorage.setItem("users",JSON.stringify([newUser]));
        alert("Usuário cadastrado com sucesso 🙌!")
    }
    // 2a situação: cadatrar os próximos usuários
    else {
        users = JSON.parse(users);
        if (checkUser(users, newUser.username)) alert("🛑 Usuário existente. Tente outro");
        else {
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            alert("Usuário cadastrado com sucesso 🙌!")
        }
    }
});

// Objetivo: Verifica se existe "user" em "vetUser"
// Parâmetros:
//  vetUser: vetor de usuarios {username:"_",password:"_"}
//  user: nome do usuário
// Retorno: true (existe o user) ou false (caso contrário)
function checkUser(vetUsers, user) {
    for (var i=0; i<vetUsers.length; i++)
        if (vetUsers[i].username == user) return true; // achou 
    return false; // nao achou o user
}

console.log(checkUser(usuarios,"Victor"))