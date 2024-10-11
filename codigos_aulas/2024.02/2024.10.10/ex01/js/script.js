// parte de implementação das funções

function matheus() {
    var hora = new Date();
    var horaAtual = hora.toLocaleTimeString('pt-BR');
    alert(horaAtual);
}

// antena é um parâmetro que recebe um valor numerico
function vinicius(antena) {
    if (antena >= 30)
        alert('Vou ligar o projetor');
    else 
        alert('Não consigo ligar o projeto. Preciso de uma antena maior')
}

function fernando(msg) {
    alert(`enviar a mensagem ${msg} do prof. Wilton para a turma via whatsapp`)
}

// chamada das funções
matheus();
vinicius(55);
fernando('Pessoal, semana que vem não haverá aula, pois estaremos de férias!');