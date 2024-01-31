let playerScore = 0;
let computerScore = 0;

function updateResult(resultText) {
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = resultText;
}

function checkWinner() {
  if (playerScore === 5) {
    updateResult("Congratulations! You are the winner!");
    resetScores();
  } else if (computerScore === 5) {
    updateResult("Oops! Computer is the winner. Try again!");
    resetScores();
  }
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  updateScoreDisplay();
}

function updateScoreDisplay() {
  const scoreElement = document.getElementById('score');
  scoreElement.innerHTML = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
}

function makeSelection(playerSelection) {
  if (playerScore === 5 || computerScore === 5) {
    // Game already won, reset scores
    resetScores();
  }

  const computerSelection = getComputerChoice();
  const roundResult = playRound(playerSelection, computerSelection);

  if (roundResult.includes('Win')) {
    playerScore++;
  } else if (roundResult.includes('Lose')) {
    computerScore++;
  }

  const resultText = `
    <p>${roundResult}</p>
    `;
  
  updateScoreDisplay();
  updateResult(resultText);
  checkWinner();
}

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();

  if (playerChoice === computerSelection.toLowerCase()) {
    return "It's a tie! Let's play again.";
  }

  if (
    (playerChoice === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
    (playerChoice === 'paper' && computerSelection.toLowerCase() === 'rock') ||
    (playerChoice === 'scissors' && computerSelection.toLowerCase() === 'paper')
  ) {
    return `You Win! ${playerChoice} beats ${computerSelection}.`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerChoice}.`;
  }
}
