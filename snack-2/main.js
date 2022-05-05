// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. 
// Ogni volta che ne crei uno, stampalo a schermo.

// creo un prompt che chiede all utente un numero
let userInput = Number(prompt("Digita un numero"));

// il numero diventa N array
for ( let i = 0; i < userInput; i++){
    const array = [];

    // ogni array sarà composto da 10 numeri casuali tra 1 e 100
    while (array.length < 10) {
        array.push(Number(Math.floor((Math.random() * 100) + 1)));
    }

    // stampo il risultato
    console.log(array);
}





