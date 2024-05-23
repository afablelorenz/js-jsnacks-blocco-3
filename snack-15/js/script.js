let palla1 = {
    nome: 'palla',
    peso: 10, 
};

console.log(palla1);
modificaPesoPalla();
console.log(palla1);

function modificaPesoPalla(){
    let choice = prompt('vuole cambiare il peso della palla?');
    if(choice === 'si'){
        let userPeso = Number.parseInt(prompt('Inserire il peso della pala'),10);
        palla1.peso = userPeso;
    }else if(choice === 'no'){
        alert('ciao');
    }else{
        alert('inserire una risposta valida');
    }
}