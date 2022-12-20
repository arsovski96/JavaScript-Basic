console.log('Homework 2');

let myArray = [1,2,3,4,5];
let printedArray = document.getElementById('myList');
printedArray.innerText = '';
printedArray.innerText = `This is my array from JS: ${myArray};`

function sumOfArray(){
    myArray = [1,2,3,4,5];
    let total= 0;
    for(i=0; i < myArray.length; i++){
        total += myArray[i];
    }
        return total;
        
}
let printedSum = document.getElementById('total');
printedSum.innerText='';
printedSum.innerText= sumOfArray(total);;

//--------------------------------------------------------------------------

let myAr =[2,4,5];
function sumOfMath(){
    myAr = [2,4,5];
    let sum= 0;
    for(i=0; i < myAr.length; i++){
        sum += myAr[i];
    }
        return sum;
        
}

let printedMath = document.getElementById('math');
printedMath.innerText='';
printedMath.innerText= `(2+4+5)= ${sumOfMath(myAr)}`;