// ! Chiedi all'utente un numero di secondi da attendere e 
// ! fai partire un timer da quel momento a zero secondi, interrompendo il timer

/*let  numSecUtente = Number.parseInt(prompt('Inserire i secondi'),10);

setTimeout(countSec,numSecUtente);

function countSec(){
    let i = 0;
    setInterval(function(){
        console.log(++i);
    },1000);
}*/

// Ho capito male la consegna

let userSeconds = Number.parseInt(prompt('Scrivi i secondi che rimangono'),10);

if(userSeconds > 10 || Number.isNaN(userSeconds)){
    userSeconds = 5;
}

const timer= setInterval(function(){
    userSeconds--;
    console.log(userSeconds);
    if(userSeconds <= 0){
        clearInterval(timer);
        alert('Buon anno');
    }
},1000);