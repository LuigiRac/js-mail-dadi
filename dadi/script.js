"use strict"
console.clear()

/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


const userNumber = [
    "1","2","3","4","5","6"
  ]

let number = prompt("Utente: scegli il tuo numero fortunato da 1 a 6")
  console.log ("Il numero inserito è: " + number);

  if (userNumber.includes(number)){
    console.log("Numero valido");
 } 
 
 
 
 else {}