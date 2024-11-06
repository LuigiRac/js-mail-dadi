"use strict"
console.clear()

/* 
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email
*/

// Obiettivo: Chiedere all'utente la sua mail 

// Raccolta dati:


const userMail = [
    "adriano@mail.it",
    "luca34@gmail.com",
    "marco@libero.it",
    "edoardo50@gmail.com",
    "gabriele@tiscali.it",
    "stefania@tim.com"
  ]

  let email = prompt("Inserire la propria mail, grazie!")
  console.log ("La mail inserita è: " + email)
  

 if (userMail.includes(email)){
    console.log("La sua mail è presente, può accedere alla pagina");
 }
  
