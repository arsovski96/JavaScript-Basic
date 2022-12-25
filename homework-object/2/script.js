console.log('Homework 2')

let library = [
    {
    title: 'The robots of Dawn',
    author: ' Isaac Assimov',
    readingStatus: true,
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: ' Suzanne Collins',
    readingStatus: false,
    }
]

// for (let i = 0; i < library.length; i++) {
//     let book = "'" + library[i].title + "'" + 'by' + library[i].author + ".";
//     if(library[i].readingStatus){
//         console.log('Already read' + book);
//     }else {
//         console.log('You still need to read' + book)};

// }

let inputTitle= document.getElementById('title');
let inputAuthor=document.getElementById('author');
let inputStatus=document.getElementById('status');
let paragraph= document.getElementById('readingStatus')
let button=document.getElementById('btn');

button.addEventListener('click',function(){
    this.title=inputTitle.value;
    this.author=inputAuthor.value;
        paragraph.innerHTML = `Reading status: Already read "${this.title}" by ${this.author}` 
    }
)


