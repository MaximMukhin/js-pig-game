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

const newGame = () => {
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

btnNewGameElement.addEventListener("click", newGame);

btnTakeScoreElement.addEventListener("click", () => {
  totalScore[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent =
    totalScore[activePlayer];

  if (totalScore[activePlayer] >= 100) {
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
const winnerTextElement = document.querySelector(".winner-text");
const player1Score = document.querySelector(".player1-score");
const player2Score = document.querySelector(".player2-score");

const showModalWindow = () => {
  modalWindowElement.classList.remove("hidden-overlay");
  overlayElement.classList.remove("hidden-overlay");
  winnerTextElement.textContent = `Игрок под номером ${
    activePlayer + 1
  } выиграл!!!`;

  player1Score.textContent = `Игрок 1 набрал '${totalScore[0]}' очков`;
  player2Score.textContent = `Игрок 2 набрал '${totalScore[1]}' очков`;
};

const btnCloseModalWindowElement = document.querySelector(
  ".close-modal-window"
);

const closeModalWindow = () => {
  modalWindowElement.classList.add("hidden-overlay");
  overlayElement.classList.add("hidden-overlay");
  newGame();
};

btnCloseModalWindowElement.addEventListener("click", closeModalWindow);
