getComputerSelection = () => {
    
    let cpuChooses = Math.floor(Math.random() * 3);
    if(cpuChooses === 0){
        return "Rock"
    } else if (cpuChooses === 1){
        return "Paper"
    } else if (cpuChooses === 2){
        return "Scissors"
    } else{
        return "unCaught error"
    }

};

playOneRound = (playerChoice, cpuChoice) => {

    const roundResult = {
        userResult: -1,     // 0 = lose, 1 = draw, 2 = win, -1 = Error
        text: ""
    }

    if (playerChoice === cpuChoice){
        roundResult.userResult = 1;
        roundResult.text = "Draw! You both chose " + playerChoice;

    } else if (playerChoice === "Rock" && cpuChoice === "Paper"){
        roundResult.userResult = 0;
        roundResult.text = "You lose! " + cpuChoice + " beats " + playerChoice;
    
    } else if (playerChoice === "Paper" && cpuChoice === "Scissors"){
        roundResult.userResult = 0;
        roundResult.text = "You lose! " + cpuChoice + " beats " + playerChoice;
    
    } else if (playerChoice === "Scissors" && cpuChoice === "Rock"){
        roundResult.userResult = 0;
        roundResult.text = "You lose! " + cpuChoice + " beats " + playerChoice;

    } else if (playerChoice === "Rock" && cpuChoice === "Scissors"){
        roundResult.userResult = 2;
        roundResult.text = "You win! " + playerChoice + " beats " + cpuChoice;

    } else if (playerChoice === "Paper" && cpuChoice === "Rock"){
        roundResult.userResult = 2;
        roundResult.text = "You win! " + playerChoice + " beats " + cpuChoice;

    } else if (playerChoice === "Scissors" && cpuChoice === "Paper"){
        roundResult.userResult = 2;
        roundResult.text = "You win! " + playerChoice + " beats " + cpuChoice;

    } else{
        console.log("Unexpected error");
        roundResult.userResult = 400
        roundResult.text = "Unexpected Error"
    }

    // console.log(roundResult.text)

    return roundResult;
}


showCurrentScore = (round, playerScore, cpuScore, roundText) => {
    // Display score using HTML
    const roundCount = document.querySelector('.roundCount');
    roundCount.textContent = `Round: ${round}`;

    const roundResult = document.querySelector('.roundResult');
    if (round==5){
        roundResult.textContent = getFinalResult(cpuScore,  playerScore);
    }else{
        roundResult.textContent = roundText;
    }
    


    const playerScoreUI = document.querySelector('.playerScore');
    playerScoreUI.textContent = `${playerScore}`;

    const cpuScoreUI = document.querySelector('.cpuScore');
    cpuScoreUI.textContent = `${cpuScore}`;

};



getFinalResult = (cpuScore, playerScore) => {
    let finalResult
    if(playerScore > cpuScore){
        finalResult = "You won " + playerScore + " - " + cpuScore 
    } else if (playerScore < cpuScore){
        finalResult = "You Lost " + playerScore + " - " + cpuScore 
    } else if (playerScore === cpuScore){
        finalResult = "You Drew " + playerScore + " - " + cpuScore 
    } else {
        finalResult = "uncaught error!! Your Score: " + playerScore + " CPU Score: " + cpuScore
    }
    finalResult = finalResult + "! Please press reset to start again or continue to choose your weapon to continue!"

    return finalResult
}


// UI features

const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    roundResult = playOneRound("Rock", getComputerSelection())
    updateScore(roundResult.userResult, roundResult.text);
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    roundResult = playOneRound("Paper", getComputerSelection())
    updateScore(roundResult.userResult, roundResult.text);
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
    roundResult = playOneRound("Scissors", getComputerSelection())
    updateScore(roundResult.userResult, roundResult.text);
});


const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
    cpuScore = 0;
    playerScore = 0;
    round = 0;
    roundText  = "Game has been reset!"
    showCurrentScore(round, playerScore, cpuScore, roundText)
});


let result;
let cpuScore = 0;
let playerScore = 0;
let round = 0;

updateScore = (userResult, roundText) => {
    round++;
    if(userResult === 0){
        cpuScore++
    }else if (userResult === 2){
        playerScore++
    }
    showCurrentScore(round, playerScore, cpuScore, roundText);
}