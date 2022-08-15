// timer 
var time = 70;
// count variable

// need a buttion and event listener

// var questions = [
//  {
//        question: "What does API stand for?"
//        possibleAnswers: ["Application Programming Interface", "Access P I", "Agent Performance Indicators"]
//        correctAnswer: "Application Programming Interface"
// }  
// ]

// var questionCounter = 0
// var timeCounter = 100

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
//set attr of welcome div to hude
//set attr of questions to visible
//start loop thrpugh ques
//update h1 textContent with ques[questionCounter].question
//loop through and create possible answer buttons questions[questionCounter].possibleAnswers
// add listener to possibleAnswers button
//  possibleAnswersBtn.addEventListener('click', function (event){
//      var selectedAnswer = event.target
//     get value of target
//   compare value to questions[questionCounter].correctAnswer
// if(questions[questionCounter].correctAnswer !== selectedAnswer.value){
// deduct 10 from timerCounter - 10 and questionCounter++
//  return startGame() or askQuestions()
//}
//}