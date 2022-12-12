// -------Homework part 2--------
//Calculate dog to human years and vice versa
function calculateAge(hAge, dAge) {
    let dogAge = 7* hAge;
    let humanAge = dAge / 7;
    let personChoice = dogAge || humanAge
    if(personChoice===dogAge){
        console.log(`The dog has ${personChoice} years `);
    }
    else if (personChoice===humanAge){
        console.log(`The human is ${personChoice} years old`);
    }
    return personChoice;
}

(calculateAge(5, ))

// CALCULATOR 2 SEPARATE FUNCTIONS

// //Human to dog years
// function calculateDogAge (age) {
//     let dogAge = 7*age;
//     console.log(`The dog has ${age} years`);
//     return dogAge;
// }

// (calculateDogAge(14))

// //Dog to human years
// function calculateHumanAge (age) {
//     let humanAge = age / 7;
//     console.log(`The person is ${humanAge} years old`);
//     return humanAge;
// }

// (calculateHumanAge(14))

// ------Homework part 3-------

let currentBalance = 2000;
function atm() {
    let withdrawalAmount = parseInt(prompt("How much do you want to withdraw?"))
    // let withdrawalAmount = num,  ---> num bi bilo vnatre vo atm(num), red 16
    if( withdrawalAmount <= 2000) {
        currentBalance -= withdrawalAmount;
        alert("Transaction successful");
        alert("Your remaining balance is $" + currentBalance);
        console.log(`You have withdrawn ${withdrawalAmount} euros and your remaining balance is ${currentBalance} euros`);
    } 
    else if (withdrawalAmount >=2000)   
        alert("You do not have sufficient funds!");
    else (
        alert("Please enter amount"));
    return withdrawalAmount;
}

atm()

// ------Homework part 1------

// Number
function xNumber(x, y) {
    let sumOfXnumber = x + y;
    console.log(`The total number is ${sumOfXnumber}`);
    return sumOfXnumber;
}

(xNumber(10, 5))

// Boolean

function xBolean(x, y){
    let totalX = x * y;
if(totalX >=60){
    console.log('true')
}
else if (totalX <60){
    console.log('false')
}
    return totalX
}

(xBolean(7, 10))

// Object

function xObject (name, surname){
    let obj = {
        name: name,
        surname: surname,  };
        console.log(`My first name is ${name} and my last name is ${surname}`)
    return obj;
}

(xObject('Ivan', 'Arsovski'))

// String

function sayHi() {
    let myFriend = 'Ivan';
    console.log(`Hi ${myFriend}`);
    return myFriend;
  }

sayHi()

// Undefined

function xUndef(x1, x2){
    let total= x1 + x2;
}
total = xUndef(2, 2)
console.log(total)
