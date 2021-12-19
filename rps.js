



//create the Rock, Paper, Scissors
//allow player select one item
function playerSelection() {
return prompt("Type your selection");
} 
const movesLeft = document.querySelector('.movesleft');
moves++;
movesLeft.innerText = `Moves Left: ${10 - moves}`;



//allow computer select one item randomly
function computerSelection() {
    let options = ['rock', 'paper', 'scissors']
    return (options[Math.floor(Math.random() * options.length)])
}
//compare player selection with computer selection
function gamePlay(playerSelection, computerSelection) {
    if (computerSelection == playerSelection) {
        giveResult("The game is a draw!");
    } else if ((computerSelection == "rock" && playerSelection == "scissors")
        || (computerSelection == "scissors" && playerSelection == "ppaper")
        || (computerSelection == "paper" && playerSelection == "rock")) {
        computerScore = ++computerScore;
        console.log(computerScore);
        if (computerScore === 1) {
            console.log(`You lost.${capitalize(computerSelection)} beats ${playerSelection}.`);
        }
    }
}
//determoine the winner
