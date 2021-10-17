//Access the DOM elements in Javascript
const boxes = document.querySelectorAll('.box');
const text = document.querySelector('.container-heading');
const strategy = document.querySelector('#strategy');
const restartBtn = document.querySelector('.container-restart');


//Let's call the function drawBoard
const drawBoard = function(){
    boxes.forEach(function(box, i){
        let styleString = "";
        if (i  < 3){
            styleString += 'border-bottom: 3px solid grey;';
        }
        if (i % 3 === 0){
            styleString += 'border-right: 3px solid grey;';
        }
        if (i % 3 === 2){
            styleString += 'border-left: 3px solid grey;';
        }
        if (i > 5){
            styleString += 'border-top: 3px solid grey;';
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
        currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
    }

    if (!spaces[4] === currentPlayer){
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer){
            strategy.innerText = `${currentPlayer} wins vertically on the middle`;
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer){
            strategy.innerText = `${currentPlayer} wins horizontally on the middle`;
            return true;
        }
        if (spaces[2] === currentPlayer && spaces[6] === currentPlayer){
            strategy.innerText = `${currentPlayer} wins dioganally`;
            return true;
        }
    }

};

//Let's create draw function
const playerDraw = function(){
    let draw = 0
    spaces.forEach(function(space, i){
        if (spaces[i] !== null) draw ++;
    });

    if (draw === 9){
        text.innerText = "Draw"
        restart();
    }
};


//Let's create restart function.
const restart = function(){
    setTimeout(function(){
        spaces.forEach(function(space, i){
            spaces[i] = null;
        });
        boxes.forEach(function(box){
            box.innerText = "";
        });
        text.innerText = 'Play';
        strategy.innerText = '';
    }, 1000);
};


//Finally, give life to restart btn
restartBtn.addEventListener('click', restart);
restart();
drawBoard();
