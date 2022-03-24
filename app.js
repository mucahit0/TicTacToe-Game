const boxes = document.querySelectorAll('.box');
const playerText = document.getElementById('player-text');
const button = document.getElementById('restart');

let player = "X";

let count = 0;

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const startGame = () => {

    playerText.textContent = `${player}'s turn`;

    boxes.forEach(box => box.addEventListener('click', () => chooseArea(box)));

}



function chooseArea(box){
    if(box.textContent === ""){
        box.textContent = player;
        count++;
        turnPlayer();
    }else{
        return;
    }
    checkWinner();
}

function turnPlayer(){
    if(player === "X"){
        player = "O";
        playerText.textContent = `${player}'s turn`;
    }else{
        player = "X";
        playerText.textContent = `${player}'s turn`;
    }
}    


function checkWinner(){ 
    
    let allBox = boxes;
    
    for(let i = 0; i < winningConditions.length; i++){
        let a = winningConditions[i][0];
        let b = winningConditions[i][1];
        let c = winningConditions[i][2];
        
        if(allBox[a].textContent === allBox[b].textContent && allBox[a].textContent === allBox[c].textContent && allBox[a].textContent !== ""){
            playerText.textContent = `${allBox[a].textContent} is the winner!`
            player = 'X'
            button.style.display = 'block';
        }else if(count === 9){ // if all boxes are filled and no winner
            playerText.textContent = "It's a draw!"
            button.style.display = 'block';
        }
    }    
}    

button.addEventListener('click',()=>{
    clearBoxes();
    startGame();
    button.style.display = 'none';
})

function clearBoxes(){
    boxes.forEach(box => box.textContent = "");
}

startGame();