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


showCurrentScore = (round, playerScore, cpuScore) => {
    console.log(
        `Round ${round} Current Score
        You  -  CPU
        ${playerScore}    -  ${cpuScore}`)
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

    return finalResult
}


// UI features


const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    roundResult = playOneRound("Rock", getComputerSelection())
    console.log(roundResult);

    updateScore(roundResult.userResult);
    

});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {
    roundResult = playOneRound("Paper", getComputerSelection())
    console.log(roundResult);

    updateScore(roundResult.userResult);
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
    roundResult = playOneRound("Scissors", getComputerSelection())
    console.log(roundResult);

    updateScore(roundResult.userResult);
});

let result;
let cpuScore = 0;
let playerScore = 0;
let round = 0;

updateScore = (userResult) => {
    round++;
    if(userResult === 0){
        cpuScore++
    }else if (userResult === 2){
        playerScore++
    }
    showCurrentScore(round, playerScore, cpuScore);
}