var QuizUI = {

 displayQuiz: function() {
   if (quiz.hasEnded()) {
     this.displayScore();
   } else {
     this.displayQuestion();
     this.displayButtons();
     this.displayProgress();
     this.disableButtons();
   }
 },
 displayButtons: function() {
    var btns = document.createElement('div');
    btns.setAttribute('class','btn');
    var prev = document.createElement('button');
    prev.textContent = "Previous";
    prev.setAttribute('id','prev');
    prev.onclick = () => {
      QuizUI.prevQuestion();
    }
    var next = document.createElement('button');
    next.textContent = "Next";
    next.setAttribute('id','next');
    next.onclick = () => {
      QuizUI.nextQuestion();
    }
    btns.appendChild(prev);
    btns.appendChild(next);
    document.getElementById('question').appendChild(btns);  
  },

  displayQuestion: function() {
    const que = quiz.getCurrentQuestion();
    const choices = que.choices;
    this.populateIdWithHTML("question", que.text);
    var list;
    if(que.type == 'dropdown') {
       list = document.createElement('select');
      for(var i = 0; i < choices.length; i++) {
        var check = document.createElement('option');
        check.setAttribute('value', choices[i]);
        check.text =  choices[i];
        check.setAttribute('id',choices[i]);
        list.appendChild(check);
      }
      document.getElementById('question').appendChild(list);
      list.onchange = () => {
        QuizUI.saveAns();
      }
      //disaplay selected value in case it is selected
      document.getElementsByTagName('select')[0].selectedIndex = que.givenAnswer || 0;
    }
    else {
       list = document.createElement('ul');
       for(var i = 0; i < choices.length; i++) {
          var choice = document.createElement('li');
          var check = document.createElement('input');
          var label = document.createElement("label");
          check.setAttribute('type', 'radio');
          check.setAttribute('name', 'question');
          check.setAttribute('id',choices[i]);
          check.setAttribute('value',choices[i]);
          label.appendChild(check);
          label.appendChild(document.createTextNode(choices[i]));
          choice.appendChild(label);
          list.appendChild(choice);
        }
        document.getElementById('question').appendChild(list);
        list.onclick = () => {
          QuizUI.saveAns();
        }
        if(que.givenAnswer || que.givenAnswer == 0) {
          document.querySelectorAll('input[type="radio"]')[que.givenAnswer].checked = true
        }
    }
   },
                        
  displayScore: function() {
    var queList = new QueList();
    queList.displayAllQueAns();
  },

  disableButtons: function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    if(prevButton && nextButton) {
      prevButton.removeAttribute('disabled');
      nextButton.textContent = 'Next';
      if(quiz.currentQuestionIndex === quiz.questions.length -1) {
        //show submit
        nextButton.textContent ='submit'; 
        QuizUI.saveAns() 
      }
      else if(quiz.currentQuestionIndex == 0) {
        prevButton.setAttribute('disabled',true);
      }
    }
  },

  populateIdWithHTML: function(id, text) {
   var element = document.getElementById(id);
    element.innerHTML = text;
  },

  prevQuestion: function() {
   if(QuizUI.validateAns()) {
    quiz.setCurrentPosition(quiz.currentQuestionIndex - 1);
    QuizUI.displayQuiz();
   }
  },

  nextQuestion: function() {
    if(QuizUI.validateAns()) {
      quiz.setCurrentPosition(quiz.currentQuestionIndex + 1); 
      QuizUI.displayQuiz();
    }
  },

  validateAns: function() {
    if(quiz.getCurrentQuestion().givenAnswer != undefined || quiz.getCurrentQuestion().givenAnswer != null || quiz.getCurrentQuestion().type == 'dropdown') {
      return true;
    }
    else {
      alert('please select a value before moving further');
      return false;
    }
  },
  
  saveAns: function() {
    if(quiz.getCurrentQuestion().type === 'radiogroup') {
      answer = document.querySelector('input[name="question"]:checked')? document.querySelector('input[name="question"]:checked').value :
      '';
      answer = quiz.getCurrentQuestion().choices.indexOf(answer);
    }
    
    else {
      answer = document.getElementsByTagName('select')[0] ? document.getElementsByTagName('select')[0].selectedIndex : 0;
    }
    if(answer !== undefined || guess !== null) {
      quiz.setAnswer(answer);
    }   
  },

  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    document.getElementById('prog').setAttribute('value',currentQuestionNumber);
    document.getElementById('prog').setAttribute('max',quiz.questions.length);
  },

  }