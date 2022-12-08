let color = 'black';
let click = false;


document.addEventListener('DOMContentLoaded', () =>{
    createBoard(16);

    document.querySelector('body').addEventListener('click', (e) => {
        //we dont want the click draw to activate when clicking a button.
        //only want it to turn on when clicking anywhere else on the body.
        if (e.target.tagName != 'BUTTON') {
            //!click would make it TRUE. because we defined it as false on the Global Variable.
            click = !click;
            let draw = document.querySelector('#draw');
            if (click) {
                draw.innerHTML = 'Draw is on! You can now draw.';
            } else {
                draw.innerHTML = `Draw is off! Click to draw.`;
            }
        }
    } );

    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', () => {
        let size = getSize();
        createBoard(size);
    })
});

const createBoard = (size) => {
    let board = document.querySelector('.board');
    //this creates our little squares. 1fr is the size.
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;
    //32 divs because the '0' runs once. and code stops running when i = 32
    for(let i = 0 ; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv);
        //the following inserts the created div into the board.
        board.insertAdjacentElement('beforeend', div);
    }
}

const getSize = () => {
    let input = prompt('Enter a number to determine size of board.');
    let message = document.querySelector('#message');
    if (input === '' || isNaN(input)) {
        //innerHTML will add text to the paragraph.
        message.innerHTML = 'Size of board has not changed. Please provide a number';
    } else if ( input < 1 || input > 100) {
        message.innerHTML = 'Please Provide A Number between 1 and 100';
    } else {
        message.innerHTML = 'Lets Sketch';
        return input;
    }
}
//using arrow functions causes 'this' not to work.
function colorDiv() {
    if (click) {
        if(color == 'random') {
            //'this' is refering to the div in the createBoard() function.
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        } else {
            this.style.backgroundColor = 'black';
        }
    }
};

//setColor is a onClick on index.html
const setColor = (colorChoice) => {
    //dont use 'let' because we have done so before as a global variable.
    color = colorChoice;
}
//resetBoard is a onClick on index.html
const resetBoard = () => {
    let divs = document.querySelectorAll('div');
    divs.forEach(div => div.style.backgroundColor = 'white');
}