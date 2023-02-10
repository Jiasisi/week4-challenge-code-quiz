
var mainEl = document.querySelector("main");

var viewHighScores = document.getElementById('viewHighScores');
var countdownEl = document.getElementById('countdown');
var startquizButton = document.querySelector('#start-quiz');


var questionsTitleEl = document.getElementById('questionsTitle');
var answerOneButton = document.getElementById('answerOne');
var answerTwoButton = document.getElementById('answerTwo');
var answerThreeButton = document.getElementById('answerThree');
var answerFourButton = document.getElementById('answerFour');

var rightOrWrongLabel = document.getElementById('rightOrWrongLabel');

var finalScoreEl = document.getElementById('finalScore');
var enterInitials = document.getElementById('enterInitials');
var initialButton = document.getElementById('initialButton');


var questionsContent = [
    "Commonly used data types DO NOT include:",
    "The condition in an if/else statement is enclosed within ___",
    "Arrays in JavaScript can br used to store___.",
    "String values must be enclosed within ___ when being assigned to a variable",
    "A very useful tool used during development and debugging from printing content to the debugger is:",
];

var answers = [
    ["1. strings", "2. booleans", "3. alerts", "4. numbers" ],
    ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets" ],
    ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above" ],
    ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis" ],
    ["1. javascript", "2. terminal/bash", "3. for loops", "4. console.log" ],

];

var correctAnswers = [
    3, 
    3, 
    4, 
    3, 
    4,
];

var questionIndex = 0;
 
var timeLeft = 0;



function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            countdownEl.textContent = timeLeft;
            timeLeft--;
        } else {
            countdownEl.textContent = "";
            clearInterval(timeInterval);
            showAllDown();
        }
    }, 1000);

};


function changeQuestions(sectionName) {  
    var x =
    document.getElementById(sectionName);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
};




startquizButton.addEventListener("click", function() {
    mainEl.style.display = "none";
    document.getElementById('questions').style.display = 'block';

    countdown();
    showQuestions();
});


function showQuestions() {
    questionsTitleEl.textContent = questionsContent[questionIndex];
    answerOneButton.textContent = answers[questionIndex][0];
    answerTwoButton.textContent = answers[questionIndex][1];
    answerThreeButton.textContent = answers[questionIndex][2];
    answerFourButton.textContent = answers[questionIndex][3];
};


function answerQuestions(answerButton) {
    if (answerButton === correctAnswers[questionIndex]) {
        rightOrWrongLabel.textContent = "Correct!"; 
    } else {
        rightOrWrongLabel.textContent = "Wrong!";
        timeLeft = timeLeft - 15;
    }
    questionIndex = questionIndex + 1;
    if (questionIndex >= 5) {
        document.getElementById("allDoneSection").style.display = "block";
        finalScore = timeLeft;
        finalScoreEl.textContent = "Your final score is " + finalScore + ".";

    } else {
        showQuestions();
    };

};
 

initialButton.addEventListener("click", function(event) {
    event.preventDefault();
    


});














