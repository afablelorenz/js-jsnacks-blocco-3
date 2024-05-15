let arr= [];
let somma=0;

while(somma < 50){
    let numUtente = Number.parseInt(prompt('Inserisci numero'),10);
    if(Number.isNaN(numUtente)!==true){
        arr.push(numUtente);
            somma += numUtente;
        }
    }
console.log(arr,somma);