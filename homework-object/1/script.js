console.log('Homework 1');

let nameInput = document.getElementById('name');
let kindInput = document.getElementById('kind');
let speakInput = document.getElementById('speak');
let btnClick = document.getElementById('btn');
let parag = document.getElementById('result');

btnClick.addEventListener('click', function(){
    let name = nameInput.value;
    let kind = kindInput.value;
    let speak = speakInput.value;
    if( speak === 'Yes'){
        parag.innerHTML = `${name} is a ${kind} and says Hi Bro`;
    } else if( speak === 'No')
        parag.innerHTML = `${name} is a ${kind} and does not speak.`;
})

function Animal(name,kind,){
    this.name = name;
    this.kind = kind;
    this.speak = function(yesOrNo){
        let yesSpeak= yesOrNo;
        if (yesSpeak === 'Yes'){
            return `${this.name} is a ${this.kind} and says Hi Bro!`
        }
        else if( yesSpeak === 'No'){
            return `${this.name} is a ${this.kind} and does not speak.` 
        }
        }
    }

let dog = new Animal ('Masha','Dog');
console.log(dog.speak('No'))



