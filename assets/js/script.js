var time = 100;
var questionHead = document.querySelector(".question");
var answerChoices = document.querySelector("#answers");
var endGameCard = document.querySelector("#endgame-card");
var endGamePage = document.querySelector(".endgame");
var endGameScore = document.querySelector(".endgame-desc");
var timerText = document.querySelector(".text-timer");
var timerDisplay = document.querySelector("#count-timer");
var feedback = document.getElementsByClassName("feedback");
var scoreDisplay = document.querySelector(".score");
var initialSubmit = document.querySelector("#score-submit");
var startbtn = document.getElementById("start-button");
var landingPage = document.getElementsByClassName("landing-main");
var landing = document.getElementById("landing");
var quesLanding = document.getElementById("quiz-card");
var landingPara = document.getElementsByClassName("paragraph-description");
var scoreLanding = document.querySelector("#highscore-card");
var highscoreLink = document.querySelector("#high-link");
var highscoreOl = document.querySelector(".highscore-list");
var reset = document.querySelector(".reset");
var score = 0;
var inputIndex = 0;
var questionsIndex = 0;


 var questionsArray = [
  {
        question: "What does API stand for?",
        possibleAns: ["Application Programming Interface", "Access P I", "Agent Performance Indicators"],
        correctAns: "Application Programming Interface",
    }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        possibleAns:["JavaScript", "terminal/bash","for loops","console.log"],
        correctAns:"console.log",
    },
    {
        question:"What are the two types of scope JavaScript uses",
        possibleAns:["Global and Local", "Surrounding and Inner","Abroad and Local","Outside and Inside",],
        correctAns:"Global and Local",
    },
    {
        question:"Commonly used data types DO NOT inlude:",
        possibleAns:["string", "boolean", "alerts", "numbers"],
        correctAns:"alerts",
    },
    {
        question:"HTML stands for",
        possibleAns:["HighText Machine Language","HyperSpeed Minecraft Language","HyperText and links Markup Language","HyperText Markup Language",],
        correctAns:"HyperText Markup Language",
    },
 ]


// Start Button 
function startQuiz() {
    if (quesLanding.className === "hide") {;
      quesLanding.className = "show";
      answerChoices.className = "show";
      landing.className = "hide";
      landingPara.className = "hide";
    }
    renderQuestions();
    timer();
  }
  function renderQuestions() {
  var questionDisplay = questionsArray[questionsIndex].question;
  questionHead.textContent = questionDisplay;
  var answersLength = questionsArray[questionsIndex].possibleAns.length;
  for (var i = 0; i < answersLength; i++) {
    var buttonEl = document.getElementById(i);
    var ans = questionsArray[questionsIndex].possibleAns[i];
    buttonEl.textContent = ans;
  }
  if (questionsIndex === 5) {
    time = 0;
    endQuiz();
  }
}
function checkAns(event) {
    var answerInput = event.target;
    var answerCheck = answerInput.textContent;
    if (answerCheck === questionsArray[questionsIndex].correctAns) {
      feedback[0].textContent = "Great Job! ☻";
      score += 10;
      scoreDisplay.textContent = score;
    } else {
      feedback[0].textContent = "Sorry! Wrong! ☹";
      time -= 10;
    }
  
    questionsIndex++;
    renderQuestions();
  }

function timer() {
    var timerInterval = setInterval(function () {
      time--;
      timerText.textContent = "Time:" + time;
  
      if (time === 0 || questionsIndex === 5) {
        clearInterval(timerInterval);
        var headsUp = document.createElement("h3");
        var headsText = document.createTextNode("Time's Up!");
        headsUp.appendChild(headsText);
        quesLanding.appendChild(headsUp);
        endQuiz();
        // storeScore();
      }
      if (time === 10) {
        var headsUp = document.createElement("h3");
        var headsText = document.createTextNode("You're almost out of time!");
        headsUp.appendChild(headsText);
        quesLanding.appendChild(headsUp);
      }
    }, 1000);
  }

  function endQuiz() { 
    if (endGameCard.className === "hide") {
    quesLanding.className = "hide";
    answerChoices.className = "hide";
    timerText.className = "hide";
    endGameCard.className = "show";
    endGamePage.className = "show";
    scoreDisplay.textContent = "Final score:" + score;
  }
}
function storeScore() {
  var userInput = document.querySelector("#initials").value;
  if (!userInput) {
    userInput = "SecretUser"
  }

  var storedArray = [];
  var storageArray = {
    score: score,
    initials: userInput,
  };

  storedArray.push(storageArray);
  localStorage.setItem("storedArray", JSON.stringify(storedArray));
  if (scoreLanding.className === "hide") {
    endGameCard.className = "hide";
    endGamePage.className = "hide";
    highscoreLink.className = "hide";
    scoreLanding.classList = "show";
    scoresRender();
  }
}
function scoresRender() {
  var storageArray = JSON.parse(localStorage.getItem("storedArray")) || [];
  for (i = 0; i <= storageArray.length; i++) {
    var scoreNameDisName = document.createTextNode(
      storageArray[i].score + "- " + storageArray[i].initials
    );
    var liEl = document.createElement("li");
    liEl.appendChild(scoreNameDisName);
    highscoreOl.appendChild(liEl);
  }
}
function toHighScores() {
  if (scoreLanding.className === "hide") {
    quesLanding.className = "hide";
    answerChoices.className = "hide";
    timerText.className = "hide";
    endGameCard.className = "hide";
    endGamePage.className = "hide";
    highscoreLink.className = "hide";
    landing.className = "hide";
    landingPara.className = "hide";
    scoreLanding.className = "show";
    scoresRender();
  }
}

startbtn.addEventListener("click", startQuiz);
answerChoices.addEventListener("click", checkAns);
initialSubmit.addEventListener("click", storeScore);
highscoreLink.addEventListener("click", toHighScores);
reset.addEventListener("click", localStorage.clear());