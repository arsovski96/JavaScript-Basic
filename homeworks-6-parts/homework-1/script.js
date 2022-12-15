console.log('Homework 1 - Return one big string with a story made from the arguments');

function tellStory(){
    let myString = ['Ivan','happy','singing'];
    console.log(myString);
    return `This is ${myString[0]}. ${myString[0]} is a nice person. Today he is ${myString[1]}. He is ${myString[2]} all day. The end.`
}

console.log(tellStory())