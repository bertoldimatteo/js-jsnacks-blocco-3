// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, 
// stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const arrayNumbers = [1,3,5,8,12,20,60,52,14,17,63,89];

const greenNumbers = [];
const redNumbers = [];

const greenText = document.getElementById("green").style.color = "green";
const redText = document.getElementById("red").style.color = "red";

for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers % 2 == 0) {
        greenNumbers.push(arrayNumbers);
        const pushGreen = document.getElementById("green").innerHTML = greenNumbers;
    } else if ( arrayNumbers % 2 == 1) {
        redNumbers.push(arrayNumbers);
        const pushRed = document.getElementById("red").innerHTML = redNumbers;
    }
}




