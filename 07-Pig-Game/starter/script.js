'use strict';

// Starting variables.
let scores = [0, 0];
let currentRoundScore = 0;
let activePlayer = 0;
const winScore = 100;

// DOM elements.
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const showPlayerScores = function () {
  score0El.innerText = scores[0];
  score1El.innerText = scores[1];
};

const resetGame = function () {
  console.log('Resetting game state');
  // Reset the game state.
  scores = [0, 0];
  currentRoundScore = 0;
  activePlayer = 0;
  // Hide the dice element.
  diceEl.classList.add('hidden');
  // Update the DOM: scores.
  showPlayerScores();
  // Ensure buttons are visible.
  rollDiceBtn.classList.remove('hidden');
  holdBtn.classList.remove('hidden');
  // Update the active & winner classes.
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  document.querySelectorAll('.player').forEach(function (el) {
    el.classList.remove('player--winner');
  });
};
// Run the function once to initialise the game on load.
resetGame();
// Event listener for newGameBtn
newGameBtn.addEventListener('click', resetGame);

const setDice = function (value) {
  console.log(`Set the dice to ${value}`);
  // Assume that value is an integer from 1-6
  const imgSrc = `dice-${value}.png`;
  diceEl.setAttribute('src', imgSrc);
  // Ensure that the dice is visible.
  diceEl.classList.remove('hidden');
};

const rollDice = function () {
  const dieRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(`Rolled ${dieRoll}`);
  setDice(dieRoll);
  // Handle rolling 1s
  if (dieRoll !== 1) {
    currentRoundScore += dieRoll;
    // Set the current round score
    document.getElementById(`current--${activePlayer}`).textContent = currentRoundScore;
  } else {
    // Switch players
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log(`Rolled a 1, switching to player ${activePlayer + 1}`);
    switchPlayer();
  }
};
// Event listener for rollDiceBtn
rollDiceBtn.addEventListener('click', rollDice);

const switchPlayer = function () {
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentRoundScore = 0;

  // Update the player total scores.
  showPlayerScores();

  // Switch the active player.
  document.querySelectorAll('.player').forEach(function (el) {
    el.classList.toggle('player--active');
  });
};

const holdScore = function () {
  // Rule: Can't hold on a current score of 0.
  if (currentRoundScore === 0) {
    return;
  }

  console.log(`Holding score of ${currentRoundScore} for player ${activePlayer + 1}`);
  // For the active player, increment their total score with the current.
  scores[activePlayer] += currentRoundScore;

  // Handle winning condition.
  if (scores[activePlayer] >= winScore) {
    console.log(`Player ${activePlayer + 1} wins!`);
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    // Hide the dice and button elements.
    diceEl.classList.add('hidden');
    rollDiceBtn.classList.add('hidden');
    holdBtn.classList.add('hidden');
  } else {
    // Switch players
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log(`Switching to player ${activePlayer + 1}`);
    switchPlayer();
  }
};
holdBtn.addEventListener('click', holdScore);
