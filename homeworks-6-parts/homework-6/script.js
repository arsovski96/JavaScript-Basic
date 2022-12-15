console.log('Homework 6 - Looping Structures');

let firstName = ['1.Bob', '2.Jill', '3.Ivan'];
let lastName = ['Smith', 'Johnson', 'Arsovski'];
let fullName = []; 

function getFullName(){
for (let i=0; i < firstName.length; i++) {
    if(i % 1 ===0){
    fullName.push(firstName[i] + ' ' + lastName[i]);
    }
}
    return  fullName;

}

console.log(getFullName());