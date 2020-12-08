'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
const guess = document.querySelector('input.guess');
const btn = document.getElementsByClassName('btn check');
const message = document.getElementsByClassName('message');
const body = document.body;
const number = document.getElementsByClassName('number');
const score = document.getElementsByClassName('score');
const highScore = document.getElementsByClassName('highscore');
const again = document.getElementsByClassName('btn again');

const highS = function () {
  if (score[0].textContent > highScore[0].textContent) {
    highScore[0].textContent = score[0].textContent;
  } else {
    highScore[0].textContent = highScore[0].textContent;
  }
};

const compareNumber = function () {
  if (Number(guess.value) === randomNumber) {
    message[0].textContent = '🎉 Correct Number!';
    number[0].textContent = randomNumber;
    body.style.backgroundColor = '#60b347';
    highS();
  } else if (Number(guess.value) > randomNumber) {
    message[0].textContent = '📈 Too high!';
    score[0].textContent -= 1;
  } else if (Number(guess.value) < randomNumber) {
    message[0].textContent = '📉 Too low!';
    score[0].textContent -= 1;
  }
  if (score[0].textContent < '1') {
    message[0].textContent = '❌ Game Over! Play Again';
    score[0].textContent = 0;
  }
};

const reset = function () {
  body.style.backgroundColor = '#222';
  score[0].textContent = '20';
  message[0].textContent = 'Start guessing...';
  number[0].textContent = '?';
  guess.value = '';
  randomNumber = Math.floor(Math.random() * 20) + 1;
};

btn[0].addEventListener('click', compareNumber);

again[0].addEventListener('click', reset);
