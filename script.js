'use strict'

// let possibleMoves = ['rock', 'paper', 'scissors'];
// let roundsWon = 0;
// let roundsLost = 0;

// function computerPlay() {
//   return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection == 'rock') {
//     if (computerSelection == 'rock') {
//       return "It's a tie";
//     } else if (computerSelection == 'scissors') {
//       roundsWon++;
//       return "You win";
//     } else if (computerSelection == 'paper') {
//       roundsLost++;
//       return "You lose";
//     }
//   } else if (playerSelection == 'paper') {
//     if (computerSelection == 'rock') {
//       roundsWon++;
//       return "You win";
//     } else if (computerSelection == 'scissors') {
//       roundsLost++;
//       return "You lose";
//     } else if (computerSelection == 'paper') {
//       return "It's a tie";
//     }
//   } else if (playerSelection == 'scissors') {
//     if (computerSelection == 'rock') {
//       roundsLost++;
//       return "You lose";
//     } else if (computerSelection == 'scissors') {
//       return "It's a tie";
//     } else if (computerSelection == 'paper') {
//       roundsWon++;
//       return "You win";
//     }
//   }
// }




// function game() {
//   for (let i = 0; i <= 5; i++) {
//     let playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
//     let computerSelection = computerPlay();
//     console.log(computerSelection)
//     playRound(playerSelection, computerSelection);
//   }

//   console.log(roundsWon + ' - ' + roundsLost);

//   if (roundsWon > roundsLost) {
//     console.log('You won!')
//   } else if (roundsLost > roundsWon) {
//     console.log('You lost!')
//   } else {
//     console.log('It\'s a tie!')
//   }
// }

// game()