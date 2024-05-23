// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const automobili = [{
    marca: 'marca1',
    modello: 'modello1',
    alimentazione: 'benzina',
},
{
    marca: 'marca2',
    modello: 'modello2',
    alimentazione: 'diesel',
},
{
    marca: 'marca3',
    modello: 'modello3',
    alimentazione: 'gpl',
},
{
    marca: 'marca4',
    modello: 'modello4',
    alimentazione: 'elettrico',
},
{
    marca: 'marca5',
    modello: 'modello5',
    alimentazione: 'metano',
},
{
    marca: 'marca6',
    modello: 'modello6',
    alimentazione: 'benzina',
},
{
    marca: 'marca7',
    modello: 'modello7',
    alimentazione: 'diesel',
},
{
    marca: 'marca8',
    modello: 'modello8',
    alimentazione: 'gpl',
},
{
    marca: 'marca9',
    modello: 'modello9',
    alimentazione: 'elettrico',
},
{
    marca: 'marca10',
    modello: 'modello10',
    alimentazione: 'metano',
},
{
    marca: 'marca11',
    modello: 'modello11',
    alimentazione: 'benzina',
},
{
    marca: 'marca12',
    modello: 'modello12',
    alimentazione: 'diesel',
},
{
    marca: 'marca13',
    modello: 'modello13',
    alimentazione: 'gpl',
},
{
    marca: 'marca14',
    modello: 'modello14',
    alimentazione: 'elettrico',
},
{
    marca: 'marca15',
    modello: 'modello15',
    alimentazione: 'metano',
}];

let benzina = [];
let diesel = [];
let resto = [];

automobili.forEach(automobili => {
    if(automobili.alimentazione === 'benzina'){
        benzina.push(automobili);
    }else if(automobili.alimentazione === 'diesel'){
        diesel.push(automobili);
    }else{
        resto.push(automobili);
    }
});

console.log(benzina,diesel,resto);