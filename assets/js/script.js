// The window.load event is fired when the whole page/window has loaded, 
// including all dependent resources such as stylesheets, scripts, iframes, and images. 
// This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM 
// has been loaded, without waiting for resources to finish loading.
// window.onload = function() {

    let questionArea = document.getElementById('question-area');
    let answerArea = document.getElementById('answers-list');
    // let scoreArea = document.getElementById('score-area');
    // let allQuestions = allQuestionsEasy;
    // document.getElementById("total-questions").textContent = allQuestions.length;
    let current = 0;
    let score = 0;

    function questionChoice(levelChoice,curr) {

        let userChoice = levelChoice.textContent;
        if (userChoice === 'Easy') {
            allQuestions = allQuestionsEasy;
        } else if (userChoice === 'Hard') {
            allQuestions = allQuestionsHard;
        } else {
            alert('You have not made a choice!')
        };

         // Start the quiz
        loadQuestion(curr);
        loadAnswers(curr);
        document.getElementById("total-questions").textContent = allQuestions.length;
        document.getElementById("game-area").style.display = "initial";
        document.getElementById("welcome-area").style.display = "none";
        localStorage.setItem("userName", document.getElementById("name").textContent);
        
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


// Start the quiz
// loadQuestion(current);
// loadAnswers(current);
// };