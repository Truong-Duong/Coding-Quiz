var timerEl = document.getElementById("timer");
var timeCount = document.getElementById("countDown");
var startButton = document.getElementById("startButton");
var contentEl = document.getElementById("content");
var questionEl = document.getElementById("title");
var answerEl = document.getElementById("message");
var feedbackEl = document.getElementById("feedback");
var feedbackText = document.createElement("paragraph");
var time = 60;
var qIndex = 0;

function startTimer() {
    timer = setInterval(function () {
      time--;
      timeCount.textContent = time;
      if (time == 0) {
        alert("You Lose and You Suck");
        clearInterval(timer);
        quizEnd();
      }
    }, 1000);
}

function renderQuestion() {
    if (qIndex >= 25) {
      quizEnd();
      return;
    }
    questionEl.textContent = "";
    answerEl.textContent = "";
    startButton.remove();
    questionEl.textContent = questionsArray[qIndex].title;
    var qBtn = [];
    for (var i = 0; i < questionsArray[qIndex].options.length; i++) {
      qBtn[i] = document.createElement("button");
      qBtn[i].classList.add("button");
      qBtn[i].textContent = questionsArray[qIndex].options[i];
      answerEl.appendChild(qBtn[i]);
    }
  }
  
  function quizEnd() {
    clearInterval(timer);
    localStorage.setItem("score", time);
    window.location.href = "scorePage.html";
  }
  
  answerEl.addEventListener("click", function (event) {
    console.log(event.target.textContent);
    if (event.target.textContent === questionsArray[qIndex].answer) {
      feedbackText.textContent = "";
      feedbackText.textContent = "Correct!!";
      feedbackEl.appendChild(feedbackText);
      qIndex++;
      renderQuestion();
    } else {
      feedbackText.textContent = "";
      feedbackText.textContent = "Incorrect";
      feedbackEl.appendChild(feedbackText);
      time = time - 2;
      console.log(time);
    }
  });
  
  startButton.addEventListener("click", function () {
    renderQuestion();
    startTimer();
  });
  