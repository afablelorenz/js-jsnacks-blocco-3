let arr = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
arr.push('pesca');
let c=false;

for (let i=0; i<arr.length; i++){
    if(arr[i]==='cocomero'){
        c=true;
    }
}

if(c){
    console.log('Cocomero trovato');
}else{
    console.log('Cocomero non trovato');
}