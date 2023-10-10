usuario = localStorage.getItem("key_usuario_senha");

if (!usuario) {
    document.getElementById("username").innerHTML = "-";
    document.getElementById("pwd").innerHTML = "-";
}  
else {
    usuario = JSON.parse(usuario);
    document.getElementById("username").innerHTML = usuario.nome;
    document.getElementById("pwd").innerHTML = usuario.senha;    
}