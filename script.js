let color = 'black';

document.addEventListener('DOMContentLoaded', () =>{
    createBoard(16);
    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', () => {
        let size = getSize();
        createBoard(size);
    })
});

const createBoard = (size) => {
    let board = document.querySelector('.board');
    //this creates our little squares.
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0 ; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv);
        board.insertAdjacentElement('beforeend', div);
    }
}

const getSize = () => {
    let input = prompt('Enter Size of Board.');
    let message = document.querySelector('#message');
    if (input === '') {
        //innerHTML will add text to the paragraph.
        message.innerHTML = 'Please Provide A Number';
    } else if ( input < 0 || input > 100) {
        message.innerHTML = 'Please Provide A Number between 1 & 100';
    } else {
        message.innerHTML = 'Lets Sketch';
        return input;
    }
}
//using arrow functions causes 'this' not to work.
function colorDiv() {
    if(color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else {
        this.style.backgroundColor = 'black';
    }
};

const setColor = (colorChoice) => {
    color = colorChoice;
}

const resetBoard = () => {
    let divs = document.querySelectorAll('div');
    divs.forEach(div => div.style.backgroundColor = 'white');
}