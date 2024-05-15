arr1 = [1,2,3,4,5];
arr2 = [1,2,3,4,5,6,7,8];

while(arr2.length>arr1.length){
    arr1.push(Math.floor(Math.random()*100)+1);
}

console.log(arr1,arr2);