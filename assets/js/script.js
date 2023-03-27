// The window.load event is fired when the whole page/window has loaded, 
// including all dependent resources such as stylesheets, scripts, iframes, and images. 
// This is in contrast to DOMContentLoaded, which is fired as soon as the page DOM 
// has been loaded, without waiting for resources to finish loading.
window.onload = function() {

    let questionArea = document.getElementById('question-area');
    let answerArea = document.getElementById('answers-list');
    // let scoreArea = document.getElementById('score-area');
    let current = 0;

    // An array that holds all the questions and possible answers, including the corrent answer.
    const allQuestions = [
        {
        question: 'What is Canadas Capital?',
        answers: ['Toronto', 'Vancouver', 'Ottowa', 'Quebec', 2],
        },
        {
        question: 'What is Germanys Captial?',
        answers: ['Berlin', 'Bonn' , 'Baden-Baden', 'Munich', 0],
        },
        {
        question: 'What is the capital of Jamaica?',
        answers: ['Montego Bay', 'Port Antonio', 'Santa Cruz', 'Kingston', 3],
        }
    ];

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

                loadQuestion(current);
                loadAnswers(current);
            } else {
                questionArea.innerHTML = 'Done';
                answerArea.innerHTML = '';
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


// Start the quiz
loadQuestion(current);
loadAnswers(current);

};