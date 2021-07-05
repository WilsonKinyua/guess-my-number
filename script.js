'use strict';

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

let number = document.querySelector(".number").textContent = 23;
document.querySelector(".score").textContent = number;

document.querySelector(".guess").value = 24;
console.log(document.querySelector(".guess").value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);

// console.log(secretNumber);

let highScore = 0;

let score = document.querySelector(".score").textContent;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if(!guess) {
        document.querySelector(".message").textContent = "No number ❌";
    } else if(guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector(".number").style.width = '30rem';
        if(score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if(guess < secretNumber) {
        if(score > 1) {
            document.querySelector(".message").textContent = "😞 Number too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "😞 Your lost the game!!";
            document.querySelector(".score").textContent = 0;
        }
    }
});

// resetting the game

document.querySelector(".again").addEventListener("click", function() {
    // window.location.reload();
  
    document.querySelector(".score").textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector(".message").textContent = 'Start guessing...';
    document.querySelector(".guess").value = '';
    document.querySelector(".number").textContent = '?';

    document.querySelector("body").style.backgroundColor = '#222';
    document.querySelector(".number").style.width = '15rem';
});