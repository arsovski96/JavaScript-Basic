console.log('Chinese Zodiac');

let userInput = parseInt(prompt('Enter your birth year'))
userFormula = (userInput-4) % 12;

if(userFormula === 0) {
    console.log('According to the Chinese Zodiac your sign is Rat');
}
else if (userFormula ===1) {
    console.log('According to the Chinese Zodiac your sign is Ox');
}
else if (userFormula ===2) {
    console.log('According to the Chinese Zodiac your sign is Tiger');
}
else if (userFormula ===3) {
    console.log('According to the Chinese Zodiac your sign is Rabbit');
}
else if (userFormula ===4) {
    console.log('According to the Chinese Zodiac your sign is Dragon');
}
else if (userFormula ===5) {
    console.log('According to the Chinese Zodiac your sign is Snake');
}
else if (userFormula ===6) {
    console.log('According to the Chinese Zodiac your sign is Horse');
}
else if (userFormula ===7) {
    console.log('According to the Chinese Zodiac your sign is Goat');
}
else if (userFormula ===8) {
    console.log('According to the Chinese Zodiac your sign is Monkey');
}
else if (userFormula ===9) {
    console.log('According to the Chinese Zodiac your sign is Rooster');
}
else if (userFormula ===10) {
    console.log('According to the Chinese Zodiac your sign is Dog');
}
else if (userFormula ===11) {
    console.log('According to the Chinese Zodiac your sign is Pig');
}
else {
    
    console.log ('Refresh and Enter your birth date')
}
