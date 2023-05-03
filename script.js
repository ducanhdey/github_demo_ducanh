const startBtn = document.getElementById("start-btn");
const clickBtn = document.getElementById("click-btn");
const timer = document.getElementById("timer");
const count = document.getElementById("count");

let timeLeft = 100;
let countValue = 0;
let timerId;

function startGame() {
  startBtn.style.display = "none";
  clickBtn.style.display = "inline-block";
  timerId = setInterval(decrementTimer, 1000);
}

function decrementTimer() {
  timeLeft--;
  timer.textContent = `Time remaining: ${timeLeft} seconds`;
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
  timer.textContent = `Time remaining: ${timeLeft} seconds`;
  count.textContent = `Count: ${countValue}`;
}

function incrementCount() {
  countValue++;
  count.textContent = `Count: ${countValue}`;
}