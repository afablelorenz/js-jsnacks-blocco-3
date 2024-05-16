let par1 = prompt('inserire una parola');
let par2= prompt('inserire l\'altra parola');

controlWords(par1,par2);

function controlWords(word1,word2){
    if (word1.length == word2.length){
        console.log(word1,word2);
    }else if(word1.length > word2.length){
        console.log(word1);
    }else{
        console.log(word2);
    }
}