"use strict";

//Switch Player
let changePlayer = function () {
  curntScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = curntScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--active");
  player1.classList.toggle("player--active");
};

//Rolling Dice
let rollDice = function () {
  //Generating random dice roll
  const randmdDice = Number(Math.trunc(Math.random() * 6 + 1));
  //Showing random dice
  diceEL.classList.remove("hidden");
  //Selecting dice
  diceEL.src = `images/dice-${randmdDice}.png`;
  //checking dice of 1
  if (randmdDice !== 1) {
    curntScore += randmdDice;
    document.getElementById(`current--${activePlayer}`).textContent =
      curntScore;
  } else {
    changePlayer();
  }
};
//Selecting elements.
const finalScore0 = document.querySelector("#score--0");
const finalScore1 = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

//Starting conditions
let curntScore; //For storing current score
let activePlayer; // For selecting active player
let score = []; // For storing total score of players
let playing; //
const init = function () {
  finalScore0.textContent = 0;
  finalScore1.textContent = 0;
  diceEL.classList.add("hidden");
  curntScore = 0; //For storing current score
  activePlayer = 0; // For selecting active player
  score = [0, 0]; // For storing total score of players
  playing = true; //For adding event handlers to the buttons
};
init();
//Rolling dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    rollDice();
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += curntScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      diceEL.classList.add("hidden");
      document.getElementById(`name--${activePlayer}`).textContent = '🎉Winner🎉'
    } else {
      changePlayer();
    }
  }
});

//New game button
btnNew.addEventListener("click", function () {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
    init();
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    document.getElementById(`current--0`).textContent = curntScore;
    document.getElementById(`current--1`).textContent = curntScore;
  playing = true;
});
