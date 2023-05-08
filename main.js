let threeAnswers = [`Rock`, `Paper`, `Scissors`];

let answerIfUserChooseRock = `You Lost! Computer choose paper.`;
let answerIfUserChoosePaper = `You Lost! Computer choose scissors.`;
let answerIfUserChooseScissors = `You Lost! Computer choose rock.`
let answerIfUserWins = `You Won! The computer lost.`;
let numberOfWins = 0;
let numberOfGamesPlayed = 0;

const buttonPaper = document.querySelector(".paper");
const buttonRock = document.querySelector(".rock");
const buttonScissors = document.querySelector(".scissors");

const trackingWins = document.querySelector('.trackingWins');
const messageOfGame = document.querySelector(".messageOfGame");
const finalMessage = document.querySelector('.finalMessage');

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
    numberOfGamesPlayed += 1;
    console.log(numberOfGamesPlayed);
    messageOfGame.textContent = `${outcomeOfGame}`
};

buttonPaper.addEventListener('click', () => {
    game("paper");
    trackingWins.textContent = `Number of Wins: ${numberOfWins}`;
});

buttonRock.addEventListener('click', () => {
    game("rock");
    trackingWins.textContent = `Number of Wins: ${numberOfWins}`;
});

buttonScissors.addEventListener('click', () => {
    game('scissors');
    trackingWins.textContent = `Number of Wins: ${numberOfWins}`;
});

function displayFinalMessage() {
    if (numberOfGamesPlayed >= 5) {
        if (numberOfWins / 5 === 1) {
            finalMessage.textContent = 
            `We got a winner. Your luck is amazing! Want to play again? `;
            numberOfWins = 0;
            numberOfGamesPlayed = 0;
        } else {
            finalMessage.textContent = `What an embarresment... `;
            numberOfWins = 0;
            numberOfGamesPlayed = 0;
        }
    }
}

Object.defineProperty(window, "numberOfGamesPlayed", {
    set: function() {
        displayFinalMessage();
    }
});

//Im trying to define a setter and getter to call displayFinalMessage once the game 
// has been played 5 times to display a final message.

// Hopefully, late on Im able to understand this bettter.