"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// querySelector by class will return the first matching element:
let scoreElement = document.querySelector(".score");
let numberElement = document.querySelector(".number");
const checkButtonElement = document.querySelector(".check");
const resetButtonElement = document.querySelector(".reset");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const wrongGuess = function (message) {
  if (score > 0) {
    displayMessage(message);
    score--;
    scoreElement.textContent = score;
  } else {
    displayMessage("You lost!");
    scoreElement = 0;
  }
};

// Check button onClick event listener:
checkButtonElement.addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  // console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("No number!");
  } else if (guess == secretNumber) {
    // When the player wins:
    displayMessage("Correct!");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
    document.querySelector("body").style.backgroundColor = "#60b347";
    numberElement.textContent = secretNumber;
    numberElement.style.width = "30rem";
    checkButtonElement.disabled = true;
  } else if (guess > secretNumber) {
    wrongGuess("Too high!");
  } else if (guess < secretNumber) {
    wrongGuess("Too low!");
  }
});

resetButtonElement.addEventListener("click", function () {
  // console.log("Resetting the game");
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  scoreElement.textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  numberElement.style.width = "15rem";
  checkButtonElement.disabled = false;
});
