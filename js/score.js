var rtBtn = document.getElementById("returnButton");
var showScore = document.getElementById("currentscore");
var scoreBtn = document.getElementById("scoreSubmit");
var formEl = document.getElementById("scoreForm");
var contentEl = document.getElementById("content");
var userEntry = document.getElementById("ints");
var scoreListEl = document.getElementById("scoreList");
var score = localStorage.getItem("score");

var savedScores = [];

function renderScores() {
  scoreListEl.innerHTML = "";

  // Render a new li for each score
  for (var i = 0; i < savedScores.length; i++) {
    var scoreSS = savedScores[i];

    var li = document.createElement("li");
    li.textContent = scoreSS;
    li.setAttribute("data-index", i);

    scoreListEl.appendChild(li);
  }
}

function init() {
  scoreListEl.textContent = "";
  // Get stored scores from localStorage
  var storedScores = JSON.parse(localStorage.getItem("scores"));

  // If scores were retrieved from localStorage, update the savedScores array to it
  if (storedScores !== null) {
    savedScores = storedScores;
  }

  // This is a helper function that will render scores to the DOM
}

function storeScores() {
  // Stringify and set key in localStorage to savedScores array
  localStorage.setItem("scores", JSON.stringify(savedScores));
}

rtBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

scoreBtn.addEventListener("click", function () {
  contentEl.textContent = "";

  var scoreInput = userEntry.value + ": " + score;

  // Return from function early if submitted todoText is blank
  if (scoreInput === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  savedScores.push(scoreInput);
  userEntry.value = "";
  console.log(savedScores);
  // Store updated todos in localStorage, re-render the list
  storeScores();
  renderScores();
});

showScore.textContent = score;
init();
