//---CREATE QUESTIONS
var questions = [
  new Question("Q-101","What is India\'s capital?","radiogroup", ["Delhi", "Mumbai", "Kolkatta","Pune"], 0),
  new Question("Q-102","Grand Central Terminal, Park Avenue, New York is the world's?","radiogroup", ["largest railway station", "highest railway station", "longest railway station","None of the above"], 1),
  new Question("Q-103","Entomology is the science that studies?","dropdown", ["Behavior of human beings", "Insects", "The origin and history of technical and scientific terms","The formation of rocks"], 2),
];

//---CREATE QUIZ
var quiz = new Quiz(questions);

//DISPLAY QUIZ
QuizUI.displayQuiz();
