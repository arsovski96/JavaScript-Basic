console.log('Homework 5 - Looping Structures');

// let numbersArray = [3, 5, 6, 8, 11];
// function findMinMax(array){
//     let min = Infinity;
//     let max = -Infinity;
//     let sum = min + max
//     for (const number of array) {
        
//         if(number>max){
//             max = number;
//         }
//         if(number<min){
//             min = number;
//         }
//     }   

//     return [`Min: ${min}, Max: ${max} Sum: ${sum}`];

// }
// console.log(findMinMax(numbersArray));

    let numbersArray = [3, 5, 6, 8, 11];
    function findMinMax() {

        let min = Math.min(...numbersArray);
        let max = Math.max(...numbersArray);
        let sum = min + max;

         return [`Min: ${min} , Max: ${max}  Sum: ${sum}`];

    }

 console.log(findMinMax())