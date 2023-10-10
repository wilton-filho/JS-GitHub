btnCadastrar = document.getElementById("btnCadastar");
btnCadastrar.addEventListener("click", cadastrar);

function cadastrar() {
    // criacao do objeto "usuario" com 2 atributos (nome e senha)
    usuario = {nome:"", senha:""}; 

    // atualizando os valores dos atributos "nome" e "senha" do objeto "usuario"
    usuario.nome = document.getElementById("txtUsername").value;
    usuario.senha = document.getElementById("txtPwd").value;

    // armazenando localmente o objeto "usuario" no navegador. Para armazar 1 objeto é necessário convertê-lo para string,
    // por isso será usado JSON.stringify
    localStorage.setItem("key_usuario_senha",JSON.stringify(usuario));
    document.getElementById("msg").innerHTML = "Usuário cadastrado com sucesso";
}