// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

// document.addEventListener("DOMContentLoaded", function() {
//     runGame();
// })

console.log(allQuestions);

for (let currentQuestion of allQuestions) {
   
    console.log(currentQuestion);
    displayQuestion(currentQuestion);
    getUserAnswer(currentQuestion);
    
}

function displayQuestion(gameQuestion) {
    document.getElementById("question-text").textContent = gameQuestion.question;
    document.getElementById("a").textContent = gameQuestion.answers[0];
    document.getElementById("b").textContent = gameQuestion.answers[1];
    document.getElementById("c").textContent = gameQuestion.answers[2];
    document.getElementById("d").textContent = gameQuestion.answers[3];
    document.getElementById("correct-answer").textContent = gameQuestion.correctAns;
}

function getUserAnswer() {

    let buttons = document.getElementsByTagName("button");
    let userAnswer; 
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "a") {
                userAnswer = 0;
            } else if (this.getAttribute("id") === "b") {
                userAnswer = 1;
            } else if (this.getAttribute("id") === "c") {
                userAnswer = 2;
            } else if (this.getAttribute("id") === "d") {
                userAnswer = 3;
            } else {
                alert("You have chosen and invalid answer!")
            }
               
            if (userAnswer == document.getElementById("correct-answer").textContent) {
                alert("Yay! You picked the right answer!")
                incrementScore();
            } else {
                alert("Sorry, you picked the wrong answer!")
                incrementWrongAnswer();
            }
        })
    }
}

function incrementScore() {

    let oldscore = parseInt(document.getElementById("correct-counter").innerText);
    document.getElementById("correct-counter").innerText = ++oldscore;

}

function incrementWrongAnswer() {

    let oldscore = parseInt(document.getElementById("wrong-counter").innerText);
    document.getElementById("wrong-counter").innerText = ++oldscore;

}