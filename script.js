"use strict";

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

let currentScore = 0;
let activePlayer = 0;

scorePlayerOneElement.textContent = totalScore[0];
scorePlayerTwoElement.textContent = totalScore[1];

diceElement.classList.add("hidden");

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOneElement.classList.toggle("player--active");
  playerTwoElement.classList.toggle("player--active");
};

const rollTheDice = () => {
  const diceRandomNum = Math.trunc(Math.random() * 6 + 1);
  diceElement.classList.remove("hidden");
  diceElement.src = `dice${diceRandomNum}.png`;

  if (diceRandomNum !== 1) {
    currentScore += diceRandomNum;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
};

btnRollTheDiceElement.addEventListener("click", rollTheDice);

btnNewGameElement.addEventListener("click", () => {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = 0;
  diceElement.classList.add("hidden");
  playerOneElement.classList.remove("player--winner");
  playerTwoElement.classList.remove("player--winner");
  playerOneElement.classList.add("player--active");
  playerTwoElement.classList.remove("player--active");
  totalScore[0] = 0;
  totalScore[1] = 0;

  scorePlayerOneElement.textContent = totalScore[0];
  scorePlayerTwoElement.textContent = totalScore[1];

  btnRollTheDiceElement.removeAttribute("disabled");
  btnTakeScoreElement.removeAttribute("disabled");

  console.log("NewGame");
  console.log(totalScore);
});

btnTakeScoreElement.addEventListener("click", () => {
  totalScore[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    totalScore[activePlayer];

  if (totalScore[activePlayer] >= 0) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");

    btnRollTheDiceElement.setAttribute("disabled", true);
    btnTakeScoreElement.setAttribute("disabled", true);
    diceElement.classList.add("hidden");
    showModalWindow();
  } else {
    switchPlayer();
  }
});

const modalWindowElement = document.querySelector(".modal-window");
const overlayElement = document.querySelector(".overlay");

const showModalWindow = () => {
  modalWindowElement.classList.remove("hidden-overlay");
  overlayElement.classList.remove("hidden-overlay");
};

const btnCloseModalWindowElement = document.querySelector(
  ".close-modal-window"
);

const closeModalWindow = () => {
  modalWindowElement.classList.add("hidden-overlay");
  overlayElement.classList.add("hidden-overlay");
};
