let score = 0;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('click-button');
const resetButton = document.getElementById('reset-button');

clickButton.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
});

resetButton.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
});
