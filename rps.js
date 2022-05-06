
function userPlay() {
    // Ask for, and return user selection.
    // Note: we also force entries to lower case to make it case insensitive.
    return userSelection = prompt("Please choose rock, paper, or scissors.");
}
// function that randomly return one option from the array, is computer option
function computerPlay() {
    let gameOptions = ["rock", "paper", "scissors"];
    return gameOptions[Math.floor(Math.random() * gameOptions.length)]
}

// function to play the game, get user selection and computer selection from computerPlay
function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() == computerSelection){
        return "Draw!, play again!"
    } else if (
        (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")) {
            return "You Win!"
    } else {
        return "You Lose!"
    }
}

// const playerSelection = "rock"
// let playerSelection = userPlay();
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection))

// game function to play 5 times the game and count who win
function game(){

    let win = 0, lost = 0, tied = 0;

    for (let i = 0; i < 5; i++){
        roundResults = playRound(userPlay(),computerPlay());
        console.log(roundResults);
    if (roundResults == "You Win!"){
        win += 1
    } else if (roundResults == "You Lose!"){
        lost += 1
    } else if (roundResults == "Draw!, play again!"){
        tied += 1
    }
    }
    console.log(`Wins: ${win} Losses: ${lost} Draw: ${tied}`)
    if (win > lost){
        console.log("Winner")
    } else if (win < lost){
        console.log("Looser")
    } else if (win == lost){
        console.log("Draw")
    }
}

game()
