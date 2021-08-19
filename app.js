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
    let playerChoice = window.prompt("Rock, Paper or Scissor? ");
    
    let caseCorrectedInput = inputCaseCorrector(playerChoice);

    switch(caseCorrectedInput) {
        case "Rock":
        case "Paper":
        case "Scissors":
          console.log(caseCorrectedInput)
          break;
        default:
          alert("Not rock paper or scissors, please choose again!");
          playerSelection();
      }

      return caseCorrectedInput;
}





playerSelection();
