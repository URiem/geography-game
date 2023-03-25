// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "answer1") {
                alert("You have chosen answer 1!")
            } else if (this.getAttribute("data-type") === "answer2") {
                alert("You have chosen answer 2!")
            } else if (this.getAttribute("data-type") === "answer3") {
                alert("You have chosen anser 3!")
            } else if (this.getAttribute("data-type") === "answer4") {
                alert("You have chosen answer 4!")
            } else {
                alert("You have chosen and invalid answer!")
            }

        })

    }

})

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

// function runGame {

// }

// function checkAnswer {

// }

// function incrementScore {

// }

// function incrementWrongAnswer {

// }

// function displayQuestion {

// }