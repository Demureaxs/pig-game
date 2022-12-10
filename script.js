'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

//scores
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
let currentScore = 0;
const player0Select = document.querySelector('.player--0');
let player0Total = 0;
let player1Total = 0;
// buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
// dice number

//rolling dice functionality.

/* my version */

//switches players and resets current score
function switchPlayer() {
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    currentScore = 0;
    currentScore0.textContent = currentScore;
  } else {
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    currentScore = 0;
    currentScore1.textContent = currentScore;
  }
}

btnRoll.addEventListener('click', function () {
  // generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // check for a rolled 1: if true switch to next player.
  if (dice !== 1) {
    //add dice to the current score
    currentScore += dice;
    if (player0Select.classList.contains('player--active')) {
      currentScore0.textContent = currentScore;
    } else if (!player0Select.classList.contains('player-active')) {
      currentScore1.textContent = currentScore;
    }
  } else {
    switchPlayer();
  }
});

//saving score functionality
btnHold.addEventListener('click', function () {
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    player0Total += currentScore;
    score0El.textContent = player0Total;
    console.log(player0Total);

    switchPlayer();
  } else {
    player1Total += currentScore;
    score1El.textContent = player1Total;
    console.log(player1Total);

    switchPlayer();
  }
});

// new game button
btnNew.addEventListener('click', function () {
  diceEl.classList.add('hidden');
  player0Total = 0;
  player1Total = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
});
