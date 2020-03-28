//---QUIZ CONSTRUCTOR
function Quiz (questions) {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
}

Quiz.prototype.getScore = function() {
  this.questions.map((d) => {
    if(d.givenAnswer === d.correctAnswer) {
      this.score++;
    }
  })
}

Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestionIndex];
};

Quiz.prototype.setCurrentPosition = function(index) {
  this.currentQuestionIndex = index;
};

Quiz.prototype.setAnswer = function(ans) {
  this.questions[this.currentQuestionIndex].givenAnswer = ans;
};

//---HasEnded PROTOTYPE
Quiz.prototype.hasEnded = function() {
  return this.currentQuestionIndex >= this.questions.length;
};

//reset all answers
Quiz.prototype.resetAns = function() {
  this.questions.map((q) => {
    q.givenAnswer = null;
  })
}