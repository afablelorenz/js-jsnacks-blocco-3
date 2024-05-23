// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

const persone = [
    {
        nome: 'persona1',
        cognome: 'person1',
        eta: '21'
    },
    {
        nome: 'persona2',
        cognome: 'person2',
        eta: '12'
    },
    {
        nome: 'persona3',
        cognome: 'person3',
        eta: '43'
    },
    {
        nome: 'persona4',
        cognome: 'person4',
        eta: '4'
    },
    {
        nome: 'persona5',
        cognome: 'person5',
        eta: '54'
    },
    {
        nome: 'persona6',
        cognome: 'person6',
        eta: '36'
    },
    {
        nome: 'persona7',
        cognome: 'person7',
        eta: '27'
    },
    {
        nome: 'persona8',
        cognome: 'person8',
        eta: '87'
    },
    {
        nome: 'persona9',
        cognome: 'person9',
        eta: '16'
    },
    {
        nome: 'persona10',
        cognome: 'person10',
        eta: '100'
    },
];


let personAgeCheck = [];

persone.forEach((eta,i) => {
    personAgeCheck.push(persone[i].nome);
    personAgeCheck.push(persone[i].cognome);
    if(persone[i].eta >= '18'){
        personAgeCheck.push(persone[i].eta = 'Puoi guidare');
        console.log('maggiore');
    }else{
        personAgeCheck.push(persone[i].eta = 'Non puoi guidare');
        console.log('minore');
    }
});
console.log(personAgeCheck);