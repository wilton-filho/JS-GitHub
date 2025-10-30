/**
 * Objetivo: cadastrar um novo usuario no localStorage
 * @param {key} chave do localStorage  
 * @param {newUser} objeto contendo os dados do usuario {usuario: "", senha: ""} 
 */
export function cadastrarUser(key, newUser) {

    let usuarios = localStorage.getItem(key);

    if (usuarios ==  null)  // nao ha nenhum usuario cadastrado
        localStorage.setItem(key, JSON.stringify([newUser]));
    else { //existe pelo menos 1 usuario cadastrado
        usuarios = JSON.parse(usuarios);
        usuarios.push(newUser);
        localStorage.setItem(key, JSON.stringify(usuarios));
    }
}

/**
 * Objetivo: verifica se existe um usuario passado como parametro (credenciais) no localStorage
 * @param {key} chave do localStorage
 * @param {credenciais} objeto contendo os dados do usuario {usuario: "", senha: ""} 
 * @returns true: existe usuario e false: caso contrário
 */
export function consultarUser(key, credenciais) {
    //JSON.parse: converte um objeto string em objeto
    let usuarios = localStorage.getItem(key);

    if (usuarios == null) return false; // usuario inexistente
    else { // existe usuarios. Inicia a busca
        usuarios = JSON.parse(usuarios); // converte de string para vetor
        
        // percorre o vetor de usuarios para verificar se existe usuario cadastrado
        for (let i=0; i<usuarios.length; i++) {
            if (usuarios[i].usuario === credenciais.usuario && usuarios[i].senha === credenciais.senha)
                return true;
        }
        return false;
    }
}