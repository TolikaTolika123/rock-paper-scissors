'use strict'

const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissors = document.querySelector('.scissors');
const counter = document.querySelector('.counter');
const playerScore = document.querySelector('.player__score');
const computerScore = document.querySelector('.computer__score');
const computerImageContainer = document.querySelector('.image-big.computer');
const playerImageContainer = document.querySelector('.image-big.player');

let maxRounds = parseInt(prompt('How many rounds do you want to play?', 0));
let possibleMoves = ['rock', 'paper', 'scissors'];
let roundsWon = 0;
let roundsLost = 0;

counter.innerHTML = 1;
function computerPlay() {
  return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
}

function playRound(playerSelection, computerSelection) {
  
  if (counter.innerHTML == maxRounds) {
    if (roundsWon > roundsLost) {
      alert('You won!');
    } else if (roundsLost > roundsWon) {
      alert('You lost!');
    } else if (roundsWon == roundsLost) {
      alert('It\'s a tie');
    }
  }
  counter.innerHTML++;


  if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      computerImageContainer.innerHTML = '<img src="images/rock.svg" class="big__image">';
    } else if (computerSelection == 'scissors') {
      roundsWon++;
      computerImageContainer.innerHTML = '<img src="images/scissors.svg" class="big__image">';
    } else if (computerSelection == 'paper') {
      roundsLost++;
      computerImageContainer.innerHTML = '<img src="images/paper.svg" class="big__image">';
    }
  } else if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      roundsWon++;
      computerImageContainer.innerHTML = '<img src="images/rock.svg" class="big__image">';
    } else if (computerSelection == 'scissors') {
      roundsLost++;
      computerImageContainer.innerHTML = '<img src="images/scissors.svg" class="big__image">';
    } else if (computerSelection == 'paper') {
      computerImageContainer.innerHTML = '<img src="images/paper.svg" class="big__image">';
    }
  } else if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      roundsLost++;
      computerImageContainer.innerHTML = '<img src="images/rock.svg" class="big__image">';
    } else if (computerSelection == 'scissors') {
      computerImageContainer.innerHTML = '<img src="images/scissors.svg" class="big__image">';
    } else if (computerSelection == 'paper') {
      roundsWon++;
      computerImageContainer.innerHTML = '<img src="images/paper.svg" class="big__image">';
    }
  }
}

// adding click functions to buttons

paper.addEventListener('click', function() {
  let computerSelection = computerPlay();
  console.log(computerSelection);
  playRound('paper', computerSelection);
  playerScore.innerHTML = roundsWon;
  computerScore.innerHTML = roundsLost;
  playerImageContainer.innerHTML = '<img src="images/paper.svg" class="big__image">';
});

rock.addEventListener('click', function() {
  let computerSelection = computerPlay();
  console.log(computerSelection);
  playRound('rock', computerSelection);
  playerScore.innerHTML = roundsWon;
  computerScore.innerHTML = roundsLost;
  playerImageContainer.innerHTML = '<img src="images/rock.svg" class="big__image">';
});

scissors.addEventListener('click', function() {
  let computerSelection = computerPlay();
  console.log(computerSelection);
  playRound('scissors', computerSelection);
  playerScore.innerHTML = roundsWon;
  computerScore.innerHTML = roundsLost;
  playerImageContainer.innerHTML = '<img src="images/scissors.svg" class="big__image">';
});