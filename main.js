let threeAnswers = [`Rock`, `Paper`, `Scissors`];

let answerIfUserChooseRock = `You Lost! Computer choose paper.`;
let answerIfUserChoosePaper = `You Lost! Computer choose scissors.`;
let answerIfUserChooseScissors = `You Lost! Computer choose rock.`
let answerIfUserWins = `You Won! The computer lost.`;
let numberOfWins = 0;

const buttonPaper = document.querySelector(".paper");
const buttonRock = document.querySelector(".rock");
const buttonScissors = document.querySelector(".scissors");

// Gets a random number from 0 - 2 (both are inclusive)
let getRandomNumber = () => Math.floor(Math.random() * (2 - 0 + 1) + 0);

let getComputerChoice = () => {
    return threeAnswers[getRandomNumber()];
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

let game = (answerFromUser) => {
        let outcomeOfGame = displayWinner(answerFromUser, getComputerChoice());

        if(outcomeOfGame === answerIfUserWins) {
            numberOfWins += 1;
        }

        console.log(outcomeOfGame);
};

buttonPaper.addEventListener('click', () => {
    game("paper");
});

buttonRock.addEventListener('click', () => {
    game("rock");
});

buttonScissors.addEventListener('click', () => {
    game('scissors');
});


if (numberOfWins >= 3) {
    console.log(`Congratulations, you're a champion!!!`);
} else if (numberOfWins <= 2) {
    console.log(`What an embarrassment...`)
}