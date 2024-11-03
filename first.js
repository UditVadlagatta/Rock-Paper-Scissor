let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//emoji
let emojiHappy = String.fromCodePoint(0x1F601);
let emojiDraw = String.fromCodePoint(128517);
let emojiLose = String.fromCodePoint(128561);

//reset button

let resetButton = document.querySelector("#reset-btn");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const getCompChoice = () =>{
    const options = ["paper","rock","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    
    return options[randIdx];
}

const drawGame = ()=>{
// console.log("game was draw");
msg.innerText = `Game was draw. ${emojiDraw} play again!`;
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `You win! ${emojiHappy} Your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("you lose!");
        msg.innerText = `You lose! ${emojiLose} ${compChoice} beat Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    // console.log("user choice = ",userChoice);
    const compChoice = getCompChoice();
    // console.log("computer choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true; 
        } else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
        // console.log("click",userChoice);
    })
    
});
const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "It's your move 🤔";
    msg.style.backgroundColor = "#198a8e";
};

resetButton.addEventListener("click",resetGame);