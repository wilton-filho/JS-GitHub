usuario = localStorage.getItem("key_usuario");
senha = localStorage.getItem("key_senha");

if (!usuario || !senha) {
    document.getElementById("username").innerHTML = "-";
    document.getElementById("pwd").innerHTML = "-";
}  
else {
    document.getElementById("username").innerHTML = usuario;
    document.getElementById("pwd").innerHTML = senha;    
}