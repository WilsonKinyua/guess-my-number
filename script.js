'use strict';

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "🎉 Correct Number!";

let number = document.querySelector(".number").textContent = 23;
document.querySelector(".score").textContent = number;

document.querySelector(".guess").value = 24;
console.log(document.querySelector(".guess").value);
*/

document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector(".guess").value);
});