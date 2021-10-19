'use strict'

const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const counter = document.querySelector('.counter');
const playerScore = document.querySelector('.player__score');
const computerScore = document.querySelector('.computer__score');
const computerImageContainer = document.querySelector('.image-big.computer');
const playerImageContainer = document.querySelector('.image-big.player');
const rounds = document.querySelector('.rounds');

let maxRounds = parseInt(prompt('How many rounds do you want to play?', 1));
let possibleMoves = ['rock', 'paper', 'scissors'];
let roundsWon = 0;
let roundsLost = 0;
rounds.innerHTML = maxRounds;
let innerCounter = 1;
counter.innerHTML = innerCounter;
function computerPlay() {
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      computerImageContainer.innerHTML = '<img src="images/rock.svg" class="big__image">';
    } else if (computerSelection == 'scissors') {
      computerImageContainer.innerHTML = '<img src="images/scissors.svg" class="big__image">';
      roundsWon++;
    } else if (computerSelection == 'paper') {
      computerImageContainer.innerHTML = '<img src="images/paper.svg" class="big__image">';
      roundsLost++;
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      computerImageContainer.innerHTML = '<img src="images/rock.svg" class="big__image">';
      roundsWon++;
    } else if (computerSelection == 'scissors') {
      computerImageContainer.innerHTML = '<img src="images/scissors.svg" class="big__image">';
      roundsLost++;
    } else if (computerSelection == 'paper') {
      computerImageContainer.innerHTML = '<img src="images/paper.svg" class="big__image">';
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      computerImageContainer.innerHTML = '<img src="images/rock.svg" class="big__image">';
      roundsLost++;
    } else if (computerSelection == 'scissors') {
      computerImageContainer.innerHTML = '<img src="images/scissors.svg" class="big__image">';
    } else if (computerSelection == 'paper') {
      computerImageContainer.innerHTML = '<img src="images/paper.svg" class="big__image">';
      roundsWon++;
    }
  }

  playerScore.innerHTML = roundsWon;
  computerScore.innerHTML = roundsLost;
  innerCounter++;
  counter.innerHTML = innerCounter;
}

// adding click functions to buttons

paper.addEventListener('click', function () {
  playerImageContainer.innerHTML = '<img src="images/paper.svg" class="big__image">';
  let computerSelection = computerPlay();
  playRound('paper', computerSelection);
  if (counter.innerHTML > maxRounds) counter.innerHTML = maxRounds;
  setTimeout(isGameOver, 100);
});

rock.addEventListener('click', function () {
  playerImageContainer.innerHTML = '<img src="images/rock.svg" class="big__image">';
  let computerSelection = computerPlay();
  playRound('rock', computerSelection);
  if (counter.innerHTML > maxRounds) counter.innerHTML = maxRounds;
  setTimeout(isGameOver, 100);
});

scissors.addEventListener('click', function () {
  playerImageContainer.innerHTML = '<img src="images/scissors.svg" class="big__image">';
  let computerSelection = computerPlay();
  playRound('scissors', computerSelection);
  if (counter.innerHTML > maxRounds) counter.innerHTML = maxRounds;
  setTimeout(isGameOver, 100);
});

// Rounds restaring function

function isGameOver() {
  if (innerCounter > maxRounds) {
    if (roundsWon > roundsLost) {
      alert('You won! Do you want to play again?');
    } else if (roundsLost > roundsWon) {
      alert('You lost! Do you want to play again?');
    } else if (roundsWon == roundsLost) {
      alert(`It's a tie! Do youwant to play again?`);
    }
    roundsWon = 0;
    roundsLost = 0;
    playerScore.innerHTML = roundsWon;
    computerScore.innerHTML = roundsLost;
    playerImageContainer.innerHTML = '';
    computerImageContainer.innerHTML = '';
    innerCounter = 1;
  }
}
