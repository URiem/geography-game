let finalScore = document.getElementById('final-score');
let mostRecentScore = localStorage.getItem("mostRecentScore");
let userLevel = localStorage.getItem("userLevel");

finalScore.innerText = `${mostRecentScore} @ level  ${userLevel}` ;