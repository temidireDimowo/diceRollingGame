'use strict';

//User rolls dice

// Generate a random dice roll

//selecting the section for player1

const section00 = document.querySelector(`.player--0`);
const section01 = document.querySelector(`.player--1`);

//fetching the current score from the webpage

let currentScore00 = Number(document.getElementById(`current--0`).textContent);
let currentScore01 = Number(document.getElementById(`current--1`).textContent);

// fetching the totalScore from the webpage
let totalScore00 = Number(document.getElementById(`score--0`).textContent);
let totalScore01 = Number(document.getElementById(`score--1`).textContent);

// selecting all the button from
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`); //
const btnReset = document.querySelector(`.btn--new`);
const diceDisplay = document.querySelector(`.dice`);
// creating a function that switches players
function switchPLayers() {
  if (section00.classList.contains(`player--active`)) {
    currentScore00 = 0;
    section00.classList.remove(`player--active`);
    section01.classList.add(`player--active`);
    document.getElementById(`current--0`).textContent = `${currentScore00}`;
  } else if (section01.classList.contains(`player--active`)) {
    currentScore01 = 0;
    section01.classList.remove(`player--active`);
    section00.classList.add(`player--active`);
    document.getElementById(`current--1`).textContent = `${currentScore01}`;
  }
}
// create a function that generates a random dice roll when the roll dice image is selected

if (section00.classList.contains(`player--active`)) {
  currentScore00 = 0;
  section00.classList.remove(`player--active`);
  section01.classList.add(`player--active`);
  document.getElementById(`current--0`).textContent = `${currentScore00}`;
} else if (section01.classList.contains(`player--active`)) {
  currentScore01 = 0;
  section01.classList.remove(`player--active`);
  section00.classList.add(`player--active`);
  document.getElementById(`current--1`).textContent = `${currentScore01}`;
}

btnRoll.addEventListener(`click`, function () {
  // generating a condition that will make rolling the dice redundant when the user wins
  if (totalScore00 < 100 && totalScore01 < 100) {
    //generates a random dice roll
    let diceRoll = Math.trunc(Math.random() * 6) + 1;

    // change the dice image according a random dice roll
    diceDisplay.src = `dice-${diceRoll}.png`;
    // if dice roll is a 1 switch player     ELSE (add dice roll to current score)

    if (diceRoll == 1) {
      //switch player
      if (section00.classList.contains(`player--active`)) {
        currentScore00 = 0;
        section00.classList.remove(`player--active`);
        section01.classList.add(`player--active`);
        document.getElementById(`current--0`).textContent = `${currentScore00}`;
      } else if (section01.classList.contains(`player--active`)) {
        currentScore01 = 0;
        section01.classList.remove(`player--active`);
        section00.classList.add(`player--active`);
        document.getElementById(`current--1`).textContent = `${currentScore01}`;
      }
    }
    // increasing current score of players 1 and 2
    else {
      if (section00.classList.contains(`player--active`)) {
        currentScore00 += diceRoll;
        // changing the text content of score player0
        document.getElementById(`current--0`).textContent = `${currentScore00}`;
      } else if (section01.classList.contains(`player--active`)) {
        currentScore01 += diceRoll;
        // changing the text content of score of player01
        document.getElementById(`current--1`).textContent = `${currentScore01}`;
      }
    }
  }
});

// display dice roll

// Dice roll display

// Is it a 1 ?

// Add

// User holds score

btnHold.addEventListener(`click`, function () {
  // generating a condition that will make rolling the dice redundant when the user wins
  if (totalScore00 < 100 && totalScore01 < 100) {
    // when a user holds
    // add current score to total score

    if (section00.classList.contains(`player--active`)) {
      // adding current score to total score of player
      // if totalScore >- 100then switching players
      //
      // adding current score to total score of player
      totalScore00 += currentScore00;
      // changing of the display of total score of player
      document.getElementById(`score--0`).textContent = `${totalScore00}`;
      switchPLayers();
      if (totalScore00 >= 100) {
        // when the user  wins the dice disappears
        // add player--winner
        section00.classList.remove(`player--active`);
        section00.classList.add(`player--winner`);
        // removing the dice display //
        diceDisplay.classList.add(`hidden`);
      }
    } else if (section01.classList.contains(`player--active`)) {
      // adding current score to total score of player
      // if score >then switching players
      //
      // adding current score to total score of player
      totalScore01 += currentScore01;
      // changing of the display of total score of player
      document.getElementById(`score--1`).textContent = `${totalScore01}`;
      // players are meant to switch after holding
      switchPLayers();
      if (totalScore01 >= 100) {
        // when the user  wins the dice disappears
        // add player--winner
        section01.classList.remove(`player--active`);
        section01.classList.add(`player--winner`);
        // removing the dice display //
        diceDisplay.classList.add(`hidden`);
      }
    }
  }
});

/** 
document.querySelector(`.btn--hold`).addEventListener(`click`, function () {
  if (
    document.querySelector(`.player--0`).classList.contains(`.player--active`)
  ) {
  }
});

*/
// User resets game

btnReset.addEventListener('click', function () {
  // reset all the values start with player1

  // manually setting the values to 0
  currentScore00 = 0;
  currentScore01 = 0;
  totalScore00 = 0;
  totalScore01 = 0;

  // bringing the dice display back
  diceDisplay.classList.remove(`hidden`);
  //resetting the values displayed
  document.getElementById(`current--0`).textContent = `${currentScore00}`;
  document.getElementById(`current--1`).textContent = `${currentScore01}`;
  document.getElementById(`score--0`).textContent = `${totalScore00}`;
  document.getElementById(`score--1`).textContent = `${totalScore01}`;

  // making sure the game starts with player 00
  section00.classList.remove(`player--active`);
  section01.classList.remove(`player--active`);
  // removing the player--winner class
  section00.classList.remove(`player--winner`);
  section01.classList.remove(`player--winner`);

  // bringing the dice display back
  diceDisplay.classList.remove(`hidden`);

  section00.classList.add(`player--active`);
});

// create a variable that stores the total scores for player 1 & 2 players

// rolling of the dice gives a temporary score that can be reset on getting the number 1
// for the dice logic I will use the math random and trunc to  get the random values for the single die

// tempScore is the total of the
// if the user holds score then add the tempScore to main score
// if scoreUser1 || scoreUser2 is >= 100 then user 1 || user 2 has won

// when the user  wins the dice disappears
// add player--winner
