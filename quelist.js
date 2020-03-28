class QueList {
    displayAllQueAns() {
        quiz.getScore();
        var gameOverHTML = "<h1>Thanks for taking Quiz</h1>";
        gameOverHTML += "<h2>Your score is: " + quiz.score + "</h2>";
        QuizUI.populateIdWithHTML("question", gameOverHTML);
        var list = document.createElement('ul');
        quiz.questions.map((q) => {
            var textNode = document.createElement('li');
            textNode.innerHTML = "Question:" + q.text;
            var correctAnswer = document.createElement('li');
            correctAnswer.innerHTML = "Correct Answer:" + q.choices[q.correctAnswer];
            var givenAns = document.createElement('li');
            givenAns.innerHTML = "Given Answer:" + q.choices[q.givenAnswer];
            var br = document.createElement('br');
            list.appendChild(textNode);
            list.appendChild(givenAns);
            list.appendChild(correctAnswer);
            list.appendChild(br);
        });
        var startBtn = document.createElement('button');
        startBtn.textContent = "Start Over"
        startBtn.onclick = () => {
            quiz.setCurrentPosition(0);
            quiz.resetAns();
            QuizUI.displayQuiz();
        }
        list.appendChild(startBtn);
        document.getElementById('question').appendChild(list);
        quiz.setCurrentPosition(0);
    }
};