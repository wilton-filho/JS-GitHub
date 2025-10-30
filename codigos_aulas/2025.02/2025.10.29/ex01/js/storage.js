// storage.js - Arquivo do Módulo
/**
 * Cadastra um novo usuário no localStorage, adicionando-o à lista existente.
 * @param {string} chave - A chave usada no localStorage (ex: 'usuarios').
 * @param {{usuario: string, senha: string}} valor - Um objeto com as credenciais do novo usuário.
 */
export function cadastrarUsusuario(chave, valor) {
    let usuariosBD = window.localStorage.getItem(chave);
    let newUsr = {usuario:valor.usuario, senha:valor.senha};

    if (usuariosBD == null) {
        // se nao houver nenhum usuario, cria um vetor contendo o primeiro usuario
        window.localStorage.setItem(chave,JSON.stringify([newUsr]));
    }
    else {
        // Se houver usuários, adiciona o novo usuário à lista existente
        usuariosBD = JSON.parse(usuariosBD);
        usuariosBD.push(newUsr);
        window.localStorage.setItem(chave,JSON.stringify(usuariosBD));
    }
}

/**
 * Verifica se ha um usuario cadatrado no localStorage
 * @param {string} chave - A chave usada no localStorage (ex: 'usuarios').
 * @param {{usuario: string, senha: string}} valor - Um objeto com as credenciais do novo usuário.
 * @returns {valor: true ou false}: se o usuario existe ou nao
 */
export function fazerLogin(chave, credenciais) {
    let usuariosBD = window.localStorage.getItem(chave);

    if (usuariosBD == null) return false;
    else {
        usuariosBD = JSON.parse(usuariosBD);
        for (let i=0; i<usuariosBD.length; i++) {
            if (usuariosBD[i].usuario === credenciais.usuario && usuariosBD[i].senha === credenciais.senha)
                return true;
        }
        return false;
    }
}


