// Building Basic Game

let number = Math.trunc(Math.random() * 20) + 1;
console.log(number);
let score = 20;
let highScore = 0;

// Display Message
const displayMessage = function (message) {
  document.querySelector(".result").textContent = message;
};

// Change Score
const changeScore = function (newScore) {
  document.querySelector(".score").textContent = newScore;
};

// Body Background
const bodyBackground = function (color) {
  document.querySelector("body").style.background = color;
};

// Check Button Even Listener
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("No Number");
  } else if (
    guess === number &&
    Number(document.querySelector(".score").textContent) === 0
  ) {
    displayMessage("Try Again");
  } else if (guess === number) {
    displayMessage("Correct Guess");
    document.querySelector(".box").textContent = number;
    bodyBackground("#60b347");
    document.querySelector(".box").style.width = "200px";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score").textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? "Too Far" : "Too Low");
      score--;
      changeScore(score);
    } else {
      displayMessage("You Lost");
      changeScore(0);
      bodyBackground("rgb(218, 14, 14)");
    }
  }
});

// Play Again Even Listener
document.querySelector(".replay").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  document.querySelector(".box").textContent = "?";
  changeScore(score);
  document.querySelector(".guess").value = "";
  bodyBackground("rgba(0, 0, 0, 0.929)");
  document.querySelector(".box").style.width = "100px";
});
