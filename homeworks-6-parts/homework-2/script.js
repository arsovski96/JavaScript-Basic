console.log('Homework 2 - Function that will take an array of 5 numbers as an argument and return the sum.')

function sumofArray() {
    arrayTo=[1,2,3,4,5];
    console.log(arrayTo);
    let total = 0;
    for (i = 0; i < arrayTo.length; i++) {
         total += arrayTo[i]; 
    }
    return total;
}

console.log(sumofArray())

