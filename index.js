var readlineSync = require("readline-sync");
var score = 0;

var questions = [{
  question: "What is your Country? ",
  answer: "india"
},
{
  question: "What is your National Bird?",
  answer: "peacock"
},
{
  question: "What is your National Flower?",
  answer: "lotus"
},
{
  question: "What is your National Animal?",
  answer: "Tiger"

},
{
  question: "What is your National Fruit?",
  answer: "mango"
},

];

function welcome() {
  var userName = readlineSync.question("What's your name? ");

  console.log("Welcome " + userName + " For 5 Question Quiz Program about your country ");
}

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    score = score + 1;
  }
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer)

  }
  console.log("Your score is: ", score);
}
welcome();
game();