// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli 
// nell’array fino a quando la somma degli elementi è minore di 50.

// creo array vuoto
const array = [];
let count = 0;

// creo condizione indefinita fino a quando non si soddisfa la richiesta
while ( count < 50 ) {
    count = 0;
    // creo form per user input di un numero
    let userInput = Number(prompt("Inserisci un numero"));
    array.push(userInput);
    
    for( let i = 0; i < array.length; i++){
        count += array[i];
    }
}
console.log(array);
console.log(count);


