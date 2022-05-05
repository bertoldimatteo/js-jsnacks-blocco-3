// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli 
// nell’array fino a quando la somma degli elementi è minore di 50.

// creo array vuoto
const array = [];
let total = 0;

// creo condizione indefinita fino a quando non si soddisfa la richiesta
while( array < 3) {
    // creo form per user input di un numero
    const userInput = Number(prompt("Inserisci un numero"));
    array.push(userInput); 
}
