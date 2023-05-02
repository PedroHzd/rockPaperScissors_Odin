let threeAnswers = [`Rock`, `Paper`, `Scissors`];

let answerIfUserChooseRock = `You Lost! Computer choose paper.`;
let answerIfUserChoosePaper = `You Lost! Computer choose scissors.`;
let answerIfUserChooseScissors = `You Lost! Computer choose rock.`
let answerIfUserWins = `You Won! The computer lost.`;
let numberOfWins = 0;

// Gets a random number from 0 - 2 (both are inclusive)
let randomNumber = () => Math.floor(Math.random() * (2 - 0 + 1) + 0);

let getComputerChoice = () => {
    return threeAnswers[randomNumber()];
};

function displayWinner(playerSelection, computerSelection) {
    if(playerSelection.toUpperCase() === `ROCK` && computerSelection.toUpperCase() === `PAPER`) {
        return answerIfUserChooseRock;
    } else if(playerSelection.toUpperCase() === `PAPER` && computerSelection.toUpperCase() === `SCISSORS`) {
        return answerIfUserChoosePaper;
    } else if(playerSelection.toUpperCase() === `SCISSORS` && computerSelection.toUpperCase() === `ROCK`) {
        return answerIfUserChooseScissors;
    } else {
        return answerIfUserWins;
    }
}

let game = () => {
    for(let i = 0; i < 5; i++) {
        let answerFromUser = prompt(`Best of Five...\nPaper, Rock, or Scissors?`)
        let outcomeOfGame = displayWinner(answerFromUser, getComputerChoice());

        if(outcomeOfGame === answerIfUserWins) {
            numberOfWins += 1;
        }

        console.log(outcomeOfGame);   
    }
};

game();

if (numberOfWins >= 3) {
    console.log(`Congratulations, you're a champion!!!`);
} else if (numberOfWins <= 2) {
    console.log(`What an embarrassment...`)
}