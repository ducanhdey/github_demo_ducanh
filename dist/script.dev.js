"use strict";

var startBtn = document.getElementById("start-btn");
var clickBtn = document.getElementById("click-btn");
var timer = document.getElementById("timer");
var count = document.getElementById("count");
var timeLeft = 100;
var countValue = 0;
var timerId;

function startGame() {
  startBtn.style.display = "none";
  clickBtn.style.display = "inline-block";
  timerId = setInterval(decrementTimer, 1000);
}

function decrementTimer() {
  timeLeft--;
  timer.textContent = "Time remaining: ".concat(timeLeft, " seconds");

  if (timeLeft === 0) {
    endGame();
  }
}

function endGame() {
  clearInterval(timerId);
  clickBtn.style.display = "none";
  startBtn.style.display = "inline-block";
  timeLeft = 100;
  countValue = 0;
  timer.textContent = "Time remaining: ".concat(timeLeft, " seconds");
  count.textContent = "Count: ".concat(countValue);
}

function incrementCount() {
  countValue++;
  count.textContent = "Count: ".concat(countValue);
}
//# sourceMappingURL=script.dev.js.map
