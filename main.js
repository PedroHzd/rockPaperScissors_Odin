let threeAnswers = [`Rock`, `Paper`, `Scissors`];

// Gets a random number from 0 - 2 (both are inclusive)
let randomNumber = () => Math.floor(Math.random() * (2 - 0 + 1) + 0);

let getComputerChoice = () => {
    return threeAnswers[randomNumber()];
}

