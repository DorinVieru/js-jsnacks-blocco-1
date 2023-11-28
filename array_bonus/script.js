const array_first = [10,6,7,8,5,4,3,2,1];
const array_second = [5,7,3,2,9];

if (array_first.length > array_second.length){
    // AGGIUNGO ELEMENTI AL SECONDO ARRAY
    for (let i = array_second.length; i<array_first.length; i++){
        let num = Math.floor(Math.random() * 100 + 1);
        array_second.push(num);
    } 
}
else{
    // AGGIUNGO ELEMENTI AL PRIMO ARRAY
}

console.log(array_first);
console.log(array_second);