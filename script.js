'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //when there is no input
  if (!guess) {
    displayMessage('No number!');

    //when the player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b346';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When the player guessed wrongly
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       message.textContent = 'Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       message.textContent = 'You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When the player guessed wrongly; guess too low
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       message.textContent = 'Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       message.textContent = 'You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  //reset style
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  //reset num
  score = 20;
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
