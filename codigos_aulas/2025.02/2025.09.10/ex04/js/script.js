vetor = [10,20,30,40,50];

// Imprimime o vetor para cada uma das estruturas abaixo:

// "for"
for (i=0; i<vetor.length; i++)
    console.log(vetor[i]);

// "while"
i = 0;
while (i < vetor.length) {
    console.log(vetor[i++]);
}

// do {

// } while ();


// "for ... in"
for (i in vetor)
    console.log(vetor[i]);
