let arr=[];


while (arr.length<6){
    let variabile;
    variabile=Number.parseInt(prompt('Inserisci un numero'),10);
    if(Number.isNaN(variabile)!== true && variabile & 2 === 1){
        arr.push(variabile);
    }
    

}
console.log(arr);