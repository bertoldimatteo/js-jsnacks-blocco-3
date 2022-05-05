// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, 
// stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const arrayNumbers = [1,3,5,8,12,20,60,52,14,17,63,89];

let greenNumbers = [];
let redNumbers = [];

const greenText = document.getElementById("green").style.color = "green";
const redText = document.getElementById("red").style.color = "red";

arrayNumbers.forEach(number => {
    if (number % 2 == 0) {
      greenNumbers.push(number);
      document.getElementById("green").innerHTML = greenNumbers;
    } else if (number % 2 == 1) {
        redNumbers.push(number);
        document.getElementById("red").innerHTML = redNumbers;
    }
}
);