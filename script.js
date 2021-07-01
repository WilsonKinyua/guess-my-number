'use strict';

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

let number = document.querySelector(".number").textContent = 23;
document.querySelector(".score").textContent = number;

document.querySelector(".guess").value = 24;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = document.querySelector(".score").textContent;

document.querySelector(".number").textContent = secretNumber;

console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);
    if(!guess) {
        document.querySelector(".message").textContent = "No number ❌";
    } else if(guess === secretNumber) {
        document.querySelector(".message").textContent = "🎉 Correct Number!";
        // document.querySelector(".guess").value = '';
    } else if(guess > secretNumber) {
        document.querySelector(".message").textContent = "🙂 Number too High!";
        score--;
        document.querySelector(".score").textContent = score;
    } else if(guess < secretNumber) {
        document.querySelector(".message").textContent = "😞 Number too low!";
        score--;
        document.querySelector(".score").textContent = score;
    }
});