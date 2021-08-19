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

    if (playerChoice === cpuChoice){
        console.log("Draw! You both chose " + playerChoice)
    } else if (playerChoice === "Rock" && cpuChoice === "Paper"){
        console.log("You lose! " + cpuChoice + " beats " + playerChoice)
    } else if (playerChoice === "Paper" && cpuChoice === "Scissors"){
        console.log("You lose! " + cpuChoice + " beats " + playerChoice)
    } else if (playerChoice === "Scissors" && cpuChoice === "Rock"){
        console.log("You lose! " + cpuChoice + " beats " + playerChoice)
    } else if (playerChoice === "Rock" && cpuChoice === "Scissors"){
        console.log("You win! " + playerChoice + " beats " + cpuChoice)
    } else if (playerChoice === "Paper" && cpuChoice === "Rock"){
        console.log("You win! " + playerChoice + " beats " + cpuChoice)
    } else if (playerChoice === "Scissors" && cpuChoice === "Paper"){
        console.log("You win! " + playerChoice + " beats " + cpuChoice)
    } else{
        console.log("Unexpected error");
    }

}



playGame(playerSelection(), computerPlays())

