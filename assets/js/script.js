// Elements of code where taken from - Code by Marek https://www.codehim.com/vanilla-javascript/javascript-multiple-choice-questions-code/
// Inpsiration and guidance for certain aspect of code were also obtained from the Code Institutes Love Maths game
// and the Movie Quotes Quiz by Jose Maciel https://zemaciel.github.io/project-02/index.html
// https://www.freecodecamp.org/news/form-validation-with-html5-and-javascript/

const submit = document.getElementById("submit");

submit.addEventListener('click', validate);

function validate(e) {
    e.preventDefault();

    const usernameField = document.getElementById("username");

    if (!usernameField.value) {
        const usernameError = document.getElementById("usernameError");
        usernameError.classList.add("visible");
        // usernameField.classList.add("invalid");
        usernameError.setAttribute('aria-hidden', false);
        usernameError.setAttribute('aria-invalid', true);
        usernameError.innerText = "Please enter a username to proceed!"
    }

    if (usernameField.value) {
        document.getElementById("welcome-area").style.display = "initial";
        document.getElementById("username-area").style.display = "none";
        localStorage.setItem("username", usernameField.value);
    }
}

let user = localStorage.getItem("username");
console.log(user);
document.getElementById("welcome-heading").innerText = `Welcome to the Game ${user}!`;

let questionArea = document.getElementById('question-area');
let answerArea = document.getElementById('answers-list');
let allQuestions;
let current = 0;
let score = 0;

function questionChoice(levelChoice,curr) {

    let userChoice = levelChoice.textContent;
    if (userChoice === 'Easy') {
        allQuestions = allQuestionsEasy;
    } else if (userChoice === 'Intermediate') {
        allQuestions = allQuestionsIntermediate;
    } else if (userChoice === 'Advanced') {
        allQuestions = allQuestionsAdvanced;
    } else if (userChoice === 'Expert') {
        allQuestions = allQuestionsExpert;
    } else {
        alert('You have not made a choice!')
    };

     // Start the quiz
    loadQuestion(curr);
    loadAnswers(curr);
    document.getElementById("total-questions").textContent = allQuestions.length;
    document.getElementById("level").textContent = userChoice;
    document.getElementById("game-area").style.display = "initial";
    document.getElementById("welcome-area").style.display = "none";
    localStorage.setItem("userLevel", userChoice);
    
    return allQuestions;
    
}

/**
 * This function loads all the questions into the questionArea
 * It grabs the current question based on the 'current'-variable
 */
function loadQuestion(curr) {

    let question = allQuestions[curr].question;

    questionArea.innerHTML = '';
    questionArea.innerHTML = question;

}

/**
 * This function loads all the possible answers of the given question
 * It grabs the needed answer-array with the help of the current-variable
 * Every answer is added with an 'onclick' - function.
 */
function loadAnswers(curr) {
    
    let answers = allQuestions[curr].answers;
    
    answerArea.innerHTML = '';

    for (let i = 0; i < answers.length - 1 ; i += 1) {
        let createList = document.createElement('li');
        let text = document.createTextNode(answers[i]);

        createList.appendChild(text);
        createList.addEventListener("click", checkAnswer(i, answers));

        answerArea.appendChild(createList);
    }
}

/**
 * This function will run when an answer is clicked on. It checks if the clicked answer
 * is the same as the correct answer. Then it checks if that was the last question
 * in the question array. If it is not, then the next question will be loaded, 
 * if it is the last question, then it will give feedback to say the game is over.
 */
function checkAnswer(i, arr) {

    return function() {
        let givenAnswer = i;
        let correctAnswer = arr[arr.length - 1];

        if (givenAnswer === correctAnswer) {
            incrementScore();
        } else {
            incrementWrongAnswer();
        }

        if  (current < allQuestions.length - 1) {
            current += 1;
            document.getElementById("current-question").innerText = current +1;
            loadQuestion(current);
            loadAnswers(current);
        } else {
            questionArea.innerHTML = 'Done! Final Score Page is loading ...';
            answerArea.innerHTML = '';
            score = document.getElementById("correct-counter").innerText;
            localStorage.setItem("mostRecentScore", score);
            load(gameOver);
        }
    }
}

/**
 * This function increments the correct score.
 */
function incrementScore() {

    let oldscore = parseInt(document.getElementById("correct-counter").innerText);
    document.getElementById("correct-counter").innerText = ++oldscore;

}
    
/**
 * This function increments the wrong answer counter
 */
function incrementWrongAnswer() {

    let oldscore = parseInt(document.getElementById("wrong-counter").innerText);
    document.getElementById("wrong-counter").innerText = ++oldscore;

}

function load(myURL) {
    setTimeout(myURL, 3000);
}

function gameOver () {
    window.location.assign('end_game.html');
}
