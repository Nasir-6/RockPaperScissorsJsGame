console.log("Hello World!");

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




// Player Selection

playerSelection = () => {
    let playerChoice = window.prompt("Rock, Paper or Scissor? ");
    console.log(playerChoice)
}



// Take input in 
// Case Correct it
// Check if rock Paper or Scissors
// Return player selection

let inputCaseCorrector = (aString) => {
    if ((typeof aString) === "string"){
        let firstLetterCapitilised = aString[0].toUpperCase();
        let restOfLetters = aString.slice(1).toLowerCase();
        let caseCorrectedString = firstLetterCapitilised + restOfLetters 
        return caseCorrectedString
    } else{
        return "This is not a string"
    }

}

playerSelection();
