document.addEventListener('DOMContentLoaded', () =>{
    createBoard(32);
    console.log('hi');
});

const createBoard = (size) => {
    let board = document.querySelector('.board');
    //this creates our little squares.
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0 ; i < numDivs; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'yellow';
        board.insertAdjacentElement('beforeend', div);
    }
}