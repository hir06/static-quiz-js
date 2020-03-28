//---QUESTION CONSTRUCTOR
function Question (id,text,type,choices, correctAnswer, givenAnswer) {
  this.id = id;
  this.text = text;
  this.type = type;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
  this.givenAnswer = givenAnswer
}

Question.prototype.isCorrectAnswer = function (choice) {
    return this.correctAnswer == choice
};
