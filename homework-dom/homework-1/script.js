console.log('Homework 1');

let headerOne = document.getElementById('myTitle');
headerOne.innerText = '';
headerOne.innerText = 'This is a changed header from JS';

let paragraphs = document.querySelectorAll('p');
paragraphs[0].innerText = '';
paragraphs[0].innerText = 'This is a changed paragraph from JS';

paragraphs[1].innerText = '';
paragraphs[1].innerText = 'This is a changed paragraph from JS';

let textX = document.querySelector('text');
textX.innerText='';
textX.innerText='This is changed also';

let headerThree = document.querySelector('h3');
headerThree.innerText = ''; 
headerThree.innerText = 'Hey, I changed this';

let headerOneLast= headerThree.previousElementSibling;
headerOneLast.innerText ='';
headerOneLast.innerText ='Hooray, everything is changed';