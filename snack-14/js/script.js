// ! Chiedi all'utente un numero di secondi da attendere e 
// ! fai partire un timer da quel momento a zero secondi, interrompendo il timer

let  numSecUtente = Number.parseInt(prompt('Inserire i secondi'),10);

setTimeout(countSec,numSecUtente);

function countSec(){
    let i = 0;
    setInterval(function(){
        console.log(++i);
    },1000);
}
