let finalScore = document.getElementById('final-score');
let mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;