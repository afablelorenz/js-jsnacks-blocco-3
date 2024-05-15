let arr = [];
let numUtente;
numUtente = Number.parseInt(prompt('Inserisci numero di elementi'),10)

if(Number.isNan(numUtente) || numUtente < 5){
    numUtente = 10;
}

for