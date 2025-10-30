window.addEventListener("DOMContentLoaded", function () {

    
    function modificarVetor(vet) {
        vet[1] = 50;
        console.log(vet);
    }

    function main() {
        let vetor = [10,20,30];
        console.log(vetor);
        modificarVetor(vetor);
        console.log(vetor);
    }

    main();

})