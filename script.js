'use strict';

const scorePlayerOneElement = document.getElementById("score--0");
const scorePlayerTwoElement = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const btnNewGameElement = document.querySelector(".btn--new");
const btnRollTheDiceElement = document.querySelector(".btn--roll");
const btnTakeScoreElement = document.querySelector(".btn--hold");
const currentScorePlayerOneElement = document.getElementById("current--0");
const currentScorePlayerTwoElement = document.getElementById("current--1");
const playerOneElement = document.querySelector(".player--0");
const playerTwoElement = document.querySelector(".player--1");

const totalScore = [0, 0];
// let scorePlayerOne = 0;
// let scorePlayerTwo = 0;

let currentScore = 0;
let activePlayer = 0;
// let currentScorePlayerOne = 0;
// let currentScorePlayerTwo = 0;

scorePlayerOneElement.textContent = totalScore[0];
scorePlayerTwoElement.textContent = totalScore[1];

diceElement.classList.add("hidden");

const rollTheDice = () => {
  const diceRandomNum = Math.trunc(Math.random() * 6 + 1);
  diceElement.classList.remove("hidden");
  diceElement.src = `dice${diceRandomNum}.png`;

  if (diceRandomNum !== 1) {
    currentScore += diceRandomNum;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerOneElement.classList.toggle("player--active");
    playerTwoElement.classList.toggle("player--active");
  }
};

btnRollTheDiceElement.addEventListener("click", rollTheDice);

btnTakeScoreElement.addEventListener("click", () => {});

btnNewGameElement.addEventListener("click", () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = 0;
  diceElement.classList.add("hidden");
  playerOneElement.classList.add("player--active");
  playerTwoElement.classList.remove("player--active");
  console.log("NewGame");
});

