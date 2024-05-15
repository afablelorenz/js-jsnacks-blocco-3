let arr = [];
let numUtente;
numUtente = Number.parseInt(prompt('Inserisci numero di elementi'),10)

if(Number.isNaN(numUtente) || numUtente < 5){
    numUtente = 5;
}

for(let i=0; i < numUtente; i++){
    const random = Math.floor(Math.random()*100)+1;
    arr.push(random);
}
console.log(arr);
console.log(arr[arr.length-1],arr[arr.length-2],arr[arr.length-3],arr[arr.length-4],arr[arr.length-5])