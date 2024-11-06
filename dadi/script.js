"use strict"
console.clear()

/* 
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


function rollDice() {
    return Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
  }
  
  const randomNumerUser = rollDice();
  const randomNumerPc = rollDice();
  console.log(randomNumerUser, randomNumerPc);
  
  if (randomNumerUser > randomNumerPc) {
    console.log("Utente è il vincitore");
    
  }
  else if (randomNumerUser < randomNumerPc) {
        console.log("Computer è il vincitore");
 }
 else {
    console.log("PAREGGIO!!!");
    
 }