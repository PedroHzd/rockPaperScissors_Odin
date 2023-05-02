let threeAnswers = [`Rock`, `Paper`, `Scissors`];

// Gets a random number from 0 - 2 (both are inclusive)
let randomNumber = () => Math.floor(Math.random() * (2 - 0 + 1) + 0);

let getComputerChoice = () => {
    return threeAnswers[randomNumber()];
}

function winner(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === `ROCK` && computerSelection.toUpperCase() === `PAPER`) {
        return `You Lose! Computer choose paper.`;
    } else if(playerSelection.toUpperCase() === `PAPER` && computerSelection.toUpperCase() === `SCISSORS`) {
        return `You Lose! Computer choose scissors`;
    } else if(playerSelection.toUpperCase() === `SCISSORS` && computerSelection.toUpperCase() === `ROCK`) {
        return `You Lose! Computer choose rock`;
    } else {
        return `You Won! The computer lost.`
    }
}

console.log(winner(`rock`, getComputerChoice()));
