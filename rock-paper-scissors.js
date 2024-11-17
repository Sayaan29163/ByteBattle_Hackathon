let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);

    updateScore(winner);
    displayChoices(playerChoice, computerChoice);
    displayResult(winner);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'player';
    }
    return 'computer';
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        document.getElementById('playerScore').textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        document.getElementById('computerScore').textContent = computerScore;
    }
}

function displayChoices(playerChoice, computerChoice) {
    // Update the choices text
    document.getElementById('playerChoiceText').textContent = `Your Choice: ${capitalizeChoice(playerChoice)}`;
    document.getElementById('computerChoiceText').textContent = `Computer's Choice: ${capitalizeChoice(computerChoice)}`;
}

function displayResult(winner) {
    const message = winner === 'tie' ? "It's a tie!" :
                    winner === 'player' ? "You win!" : "Computer wins!";
    document.getElementById('message').textContent = message;
}

function capitalizeChoice(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1); // Capitalize the first letter
}
