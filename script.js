//Access the DOM elements in Javascript
const boxes = document.querySelectorAll('.box');
const text = document.querySelector('#heading');
const strategy = document.querySelector('#strategy');
const restartBtn = document.querySelector('#restart');


//Let's call the function drawBoard
const drawBoard = function(){
    boxes.forEach(function(box, i){
        let styleString = "";
        if (i  < 3){
            styleString += 'border-bottom: 3px solid var(--text);';
        }
        if (i % 3 === 0){
            styleString += 'border-right: 3px solid var(--text);';
        }
        if (i % 3 === 2){
            styleString += 'border-left: 3px solid var(--text);';
        }
        if (i > 5){
            styleString += 'border-top: 3px solid var(--text);';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    });
};

//Define a few more variables
const spaces = [];
const tick_circle = "0";
const tick_x = "X";
let currentPlayer = tick_circle;

//boxClicked function will take the event as an argument
const boxClicked = function(e){
    const id = e.target.id;
    console.log(e);
    if (!spaces[id]) {
        console.log(spaces[id]);
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if (playerWon()){
            text.innerHTML = `${currentPlayer} has won!`;
            restart();
            return;
        }
        if(playerDraw()){
            return
        }
        // currentPlayer =   
    }
}