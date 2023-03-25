let curr = 0;

let numOfQs = allQuestions.length;
console.log(numOfQs);

for (i = 0; i < numOfQs; i++) {
    curr = i;
    currentQuestion = allQuestions[i];
    document.getElementById("question-text").textContent = currentQuestion.question;
    document.getElementById("a").textContent = currentQuestion.answers[0];
    document.getElementById("b").textContent = currentQuestion.answers[1];
    document.getElementById("c").textContent = currentQuestion.answers[2];
    document.getElementById("d").textContent = currentQuestion.answers[3];
    document.getElementById("correct-answer").textContent = currentQuestion.correctAns;
}

function runGame {

}

function checkAnswer {

}

function incrementScore {

}

function incrementWrongAnswer {

}

function displayQuestion {
    
}