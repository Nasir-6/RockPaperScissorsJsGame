inputCaseCorrector = (aString) => {
    if ((typeof aString) === "string"){
        let firstLetterCapitilised = aString[0].toUpperCase();
        let restOfLetters = aString.slice(1).toLowerCase();
        let caseCorrectedString = firstLetterCapitilised + restOfLetters 
        return caseCorrectedString
    } else{
        return "This is not a string"
    }

}


 computerPlays = () => {
    
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


playerSelection = () => {
    let playerChoice = window.prompt("Rock, Paper or Scissors? ");
    
    let caseCorrectedInput = inputCaseCorrector(playerChoice);

    switch(caseCorrectedInput) {
        case "Rock":
        case "Paper":
        case "Scissors":
          
          break;
        default:
          alert("Not rock paper or scissors, please choose again!");
          caseCorrectedInput = playerSelection();
      }

      return caseCorrectedInput;
}


playGame = (playerChoice, cpuChoice) => {
    console.log(playerChoice);
    console.log(cpuChoice)

    let userResult; // 0 = lose, 1 = draw, 2 = win

    if (playerChoice === cpuChoice){
        console.log("Draw! You both chose " + playerChoice)
        userResult = 1;

    } else if (playerChoice === "Rock" && cpuChoice === "Paper"){
        console.log("You lose! " + cpuChoice + " beats " + playerChoice)
        userResult = 0;
    } else if (playerChoice === "Paper" && cpuChoice === "Scissors"){
        console.log("You lose! " + cpuChoice + " beats " + playerChoice)
        userResult = 0;
    
    } else if (playerChoice === "Scissors" && cpuChoice === "Rock"){
        console.log("You lose! " + cpuChoice + " beats " + playerChoice)
        userResult = 0;

    } else if (playerChoice === "Rock" && cpuChoice === "Scissors"){
        console.log("You win! " + playerChoice + " beats " + cpuChoice)
        userResult = 2;

    } else if (playerChoice === "Paper" && cpuChoice === "Rock"){
        console.log("You win! " + playerChoice + " beats " + cpuChoice)
        userResult = 2;

    } else if (playerChoice === "Scissors" && cpuChoice === "Paper"){
        console.log("You win! " + playerChoice + " beats " + cpuChoice)
        userResult = 2;
    } else{
        console.log("Unexpected error");
        userResult = 400
    }

    return userResult;
}


playRoundOfFive = () =>{

    let result;
    let cpuScore = 0;
    let playerScore = 0;

    for(round = 1; round<=5; round++){
        result = playGame(playerSelection(), computerPlays())
        if(result === 0){cpuScore++}
        else if (result === 2){playerScore++}
        console.log(
            `Round ${round} Current Score
            You  -  CPU
            ${playerScore}    -  ${cpuScore}`)
    }
    

    
    console.log(roundOfFiveResult(cpuScore, playerScore))

}

roundOfFiveResult = (cpuScore, playerScore) => {
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

playRoundOfFive()