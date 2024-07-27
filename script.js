let board = document.querySelectorAll('.box');
let rstBtn =  document.querySelector("#reset");
let newBtn = document.querySelector("#newGame");
let result = document.querySelector(".winner");
let winnerDetails = document.querySelector("#winnerResult");
let turn = document.querySelector("#turn");
let scoreO = document.querySelector("#scoreO");
let scoreX = document.querySelector("#scoreX");

playerOScore = 0;
playerXScore = 0;

let x = Math.random() *2;
let turnO = x>1?true:false;
if(!turnO){
    turn.innerText = "Player X's turn";
}else{
    turn.innerText = "Player O's turn";
}

const winnerPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];


const resetGame = () => {
    turnO=true;
    enableinput();
    playerOScore=0;
    playerXScore=0;
    result.classList.add("hide");
}
const newGame = () => {
    turnO=true;
    enableinput();
    result.classList.add("hide");
}
const printWinner = (winner) => {
    winnerDetails.innerText = `Player ${winner} wins`;
    if(winner==="O"){
        playerOScore++;
    }else{
        playerXScore++;
    }
    scoreO.innerText = `Player O Score: ${playerOScore}`;
    scoreX.innerText = `Player X Score: ${playerXScore}`;
    result.classList.remove("hide");
}
board.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            turn.innerText = "Player X's turn";
            turnO = false;
        }else{
            box.innerText = "X";
            turn.innerText = "Player O's turn";
            turnO = true ;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableinput = () => {
    for(let box of board){
        box.disabled = true;
    }
}
const enableinput = () => {
    for(let box of board){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () => {
    for(let pattern of winnerPatterns){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(board[pattern[0]], board[pattern[1]], board[pattern[2]]);
        // console.log(board[pattern[0]].innerText, board[pattern[1]].innerText, board[pattern[2]].innerText);

        let p1 = board[pattern[0]].innerText;
        let p2 = board[pattern[1]].innerText;
        let p3 = board[pattern[2]].innerText;

        if(p1 != "" && p2 != "" && p3 != ""){
            if(p1=== p2 && p2=== p3){
                // console.log("Winner",p1);
                printWinner(p1);
                disableinput();
            }
        }
    }
}

newBtn.addEventListener("click",newGame);
rstBtnBtn.addEventListener("click",resetGame);