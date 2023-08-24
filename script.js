const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const startAgainBtn = document.getElementById('startAgainBtn');

let playerScore = 0;
let galibScore = 0;

choices.forEach(choice => {
  choice.addEventListener('click', playGame);
});

startAgainBtn.addEventListener('click', resetGame);

function playGame(e) {
  const playerChoice = e.target.id;
  const galibChoice = getGalibChoice();
  const gameResult = determineWinner(playerChoice, galibChoice);

  updateScore(gameResult);
  displayResult(playerChoice, galibChoice, gameResult);
}

function getGalibChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(player, galib) {
  if (player === galib) {
    return 'It\'s a tie!';
  } else if (
    (player === 'rock' && galib === 'scissors') ||
    (player === 'paper' && galib === 'rock') ||
    (player === 'scissors' && galib === 'paper')
  ) {
    playerScore++;
    return 'You win!';
  } else {
    galibScore++;
    return 'Galib wins!';
  }
}

function updateScore(result) {
  scoreDisplay.textContent = `You: ${playerScore}  Galib: ${galibScore}`;
}

function displayResult(player, galib, resultText) {
  result.textContent = `You chose ${player}, Galib chose ${galib}. ${resultText}`;
}

function resetGame() {
  playerScore = 0;
  galibScore = 0;
  updateScore();
  result.textContent = '';
}
