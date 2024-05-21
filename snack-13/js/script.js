let num = Number.parseInt(prompt('Inserire un numero'));
invertNum(num);
console.log(num);

function invertNum(numberUser){
    let inverted;
    for(let i=numberUser.length-1; i >= numberUser.length; i--){
        inverted += numberUser[i];
        console.log(inverted,numberUser);
    }
    console.log(numberUser);
    return inverted;
}
