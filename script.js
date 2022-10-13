'use strict';

const scorePlayerOneElement = document.getElementById("score--0");
const scorePlayerTwoElement = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const btnNewGameElement = document.querySelector(".btn--new");
const btnRollTheDiceElement = document.querySelector(".btn--roll");
const btnTakeScoreElement = document.querySelector(".btn--hold");
const currentScorePlayerOneElement = document.getElementById("current--0");
const currentScorePlayerTwoElement = document.getElementById("current--1");

const scorePlayerOne = 0;
const scorePlayerTwo = 0;

const currentScorePlayerOne = 0;
const currentScorePlayerTwo = 0;

scorePlayerOneElement.textContent = scorePlayerOne;
scorePlayerTwoElement.textContent = scorePlayerTwo;

diceElement.classList.add("hidden");

const rollTheDice = () => {
  const diceRandomNum = Math.trunc(Math.random() * 6 + 1);
  console.log(diceRandomNum);
  diceElement.classList.remove("hidden");
  diceElement.src = `dice${diceRandomNum}.png`;
};

btnRollTheDiceElement.addEventListener("click", rollTheDice);





