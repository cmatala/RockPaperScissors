function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt("Round " + round + ": Enter 'Rock', 'Paper', or 'Scissors'");
    const computerSelection = getComputerChoice();

    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult.includes('Win')) {
      playerScore++;
    } else if (roundResult.includes('Lose')) {
      computerScore++;
    }
  }

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `
    <p>Game Over!</p>
    <p>Player Score: ${playerScore}</p>
    <p>Computer Score: ${computerScore}</p>
    <p>${playerScore > computerScore ? 'You win the game!' : (computerScore > playerScore ? 'You lose the game!' : 'It\'s a tie game!')}</p>
  `;
}

function startGame() {
  game();
  alert("Game Over! Check the result below.");
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
