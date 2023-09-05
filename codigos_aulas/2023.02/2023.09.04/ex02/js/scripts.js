// Sorteia um nro de 1 a 6
sorteio = Math.round(Math.random()*5)+1; 

document.write(`<h2>Passe o mouse sobre a imagem abaixo para visualizar o número sorteado!!!</h2>`);
// Exibe a imagem do dado correspondente
document.write(`<img src="img/dado${sorteio}.png">`);