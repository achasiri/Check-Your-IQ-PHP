

// JavaScript Document

$(document).ready(function(){
  "use strict";
  
// Set the date we're counting down to
//var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();
var thirtyMinLater = new Date();
thirtyMinLater.setMinutes(thirtyMinLater.getMinutes() + 3);
startTimecountDown();
// Update the count down every 1 second
function startTimecountDown(){
var x = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = thirtyMinLater - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        if(!finishExam) {
        	var scoreElem = displayScore();
			$('#question').remove();
			quiz.append(scoreElem).fadeIn();
			$('#next').hide();
			$('#prev').hide();
			$('#start').show();
		}
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
}

  
  var questions = [{
    question: "The acronym RSVP originally came from the French term Répondez s’il vous plaît – True or False? ",
    choices: ['True','False'],
    type : 'radio',
    correctAnswer: 0
  }, {
    question: "Pig is to pork as Cow is to _____:?",
    choices: ['Lamb','Beef','Stew','Cattle'],
    type : 'radio',
    correctAnswer: 1
  }, {
    question: "Which of these numbers are prime?",
    choices: [ 21, 17, 33, 29],
    type : 'checkbox',
    correctAnswer: 1
  },{
    question: "If you have a cube which is 5m x 5m x 5m, what is the cubic metres this container would hold? ",
    choices: ["125 cubic metres","25 cubic metres","165 cubic metres","225 cubic metres"],
	 type : 'radio',
    correctAnswer: 0
  }, {
    question: "Which of the following countries are in Africa?",
    choices: ['China' ,'Congo'  ,'France' ,'Kenya' ],
    type : 'checkbox',
    correctAnswer: 0
  }, {
    question: " What are multiple of 2 and 3?",
    choices: [18,9 ,15, 12],
	 type : 'checkbox',
    correctAnswer: 1
  }, {
    question: "The word PARTICULAR is the opposite of:",
    choices: ['Distinct','Vague','Exacting','Fussy'],
	type : 'radio',
    correctAnswer: 1
  }, {
    question: " which of the following are even numbers?",
    choices: [81 , 82,  83,  84 ],
	 type : 'checkbox',
    correctAnswer: 1
  },{
    question: "___________ controls the way in which the computer system functions and provides a means by which users can interact with the computer. ",
    choices: ['The operating system', 'The motherboard', 'The platformApplication', 'Software'],
		type : 'radio',
    correctAnswer: 0
  },{
    question: "All of the following are examples of input devices  ",
    choices: ['mouse', 'Monitor','Keyboard','Printer'],
		type : 'checkbox',
    correctAnswer: 0
  }
  ];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('.content'); //Quiz div object
  var finishExam = false;
  
  // Display initial question
  displayNext();
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      $('#warning').text('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
	  $('#warning').text('');
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
    thirtyMinLater.setMinutes(thirtyMinLater.getMinutes() + 1);
    startTimecountDown();
  });
  
   var tim;       
        var min = '${sessionScope.min}';
        var sec = '${sessionScope.sec}';
        var f = new Date();

        function customSubmit(someValue){  
        	 document.questionForm.minute.value = min;   
        	 document.questionForm.second.value = sec; 
        	 document.questionForm.submit();  
        	 }  

        function examTimer() {
            if (parseInt(sec) >0) {

			    document.getElementById("showtime").innerHTML = "Time Remaining :"+min+" Minutes ," + sec+" Seconds";
                sec = parseInt(sec) - 1;                
                tim = setTimeout("examTimer()", 1000);
            }
            else {

			    if (parseInt(min)==0 && parseInt(sec)==0){
			    	document.getElementById("showtime").innerHTML = "Time Remaining :"+min+" Minutes ," + sec+" Seconds";
				     alert("Time Up");
				     document.questionForm.minute.value=0;
				     document.questionForm.second.value=0;
				     document.questionForm.submit();

			     }

                if (parseInt(sec) == 0) {				
				    document.getElementById("showtime").innerHTML = "Time Remaining :"+min+" Minutes ," + sec+" Seconds";					
                    min = parseInt(min) - 1;
					sec=59;
                    tim = setTimeout("examTimer()", 1000);
                }

            }
        }
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    var radioButtons = "";
    if(questions[index].type == 'checkbox'){
    	radioButtons = createCheckBox(index);
    }
    else{
    	radioButtons = createRadios(index);
	}
    qElement.append(radioButtons);
	// this is new
	var warningText = $('<p id="warning">');
	qElement.append(warningText);
	
	return qElement;

  }
  

  // Creates a list of the answer choices as radio inputs
  function createCheckBox(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="checkbox" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
        else if (questionCounter == questions.length-1){
			$("#next").html('Submit');
		}
       }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
        
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<h3>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
	// Calculate score and display relevant message
	var percentage = numCorrect / questions.length;
	if (percentage >= 0.9){
    	score.append('Incredible! You got ' + numCorrect + ' out of ' +
                 questions.length + ' questions right!');
	}
	
	else if (percentage >= 0.7){
    	score.append('Good job! You got ' + numCorrect + ' out of ' +
                 questions.length + ' questions right!');
	}
	
	else if (percentage >= 0.5){
    	score.append('You got ' + numCorrect + ' out of ' +
                 questions.length + ' questions right.');
	}
	
	else {
    	score.append('You only got ' + numCorrect + ' out of ' +
                 questions.length + ' right. Want to try again?');
	}
    return score;
  }
})
