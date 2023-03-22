let curr = 0;

let numOfQs = Object.keys(allQuestions).length;

for (i = 0; i < numOfQs; i++) {
    curr = i;
let question = Object.keys(allQuestions)[curr];
let answers = Object.values(allQuestions)[curr];
let correctAnswer = answers[answers.length-1];
console.log(question);
console.log(answers);
console.log(correctAnswer);
console.log(numOfQs);

document.getElementById("question-text").textContent = question;
document.getElementById("a").textContent = answers[0];
document.getElementById("b").textContent = answers[1];
document.getElementById("c").textContent = answers[2];
document.getElementById("d").textContent = answers[3];
document.getElementById("correct-answer").textContent = answers[answers[4]];
}