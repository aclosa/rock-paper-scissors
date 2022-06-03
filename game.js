
// define const
let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll("button.play")

// function that randomly return one option from the array, is computer option
function computerPlay() {
    let gameOptions = ["rock", "paper", "scissors"];
    return gameOptions[Math.floor(Math.random() * gameOptions.length)]
}

// function to diable buttons after rounds finish
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

// function to play round games
function playRound(playerSelection){
    let computerSelection = computerPlay()
    let result = ""

    if (playerSelection.toLowerCase() == computerSelection){
        result = `Draw! play again!<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`
    } else if (
        (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock")) {
            playerScore += 1
            result =  `You Win! ${playerSelection} beats ${computerSelection}<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`
        if (playerScore == 5){
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    } else {
        computerScore += 1
        result = `You Lose! ${computerSelection} beats ${playerSelection}<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`
        if (computerScore == 5){
            result += '<br><br>I won the game!<br> Press Play Again button for a new game'
            disableButtons()
        }
    }
    document.getElementById('results').innerHTML = result
    return
}

// interactive button function to play
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.id)
    })
})

// reload game

function refreshPage(){
    window.location.reload();
} 
