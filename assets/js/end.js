let finalScore = document.getElementById('final-score');
let mostRecentScore = localStorage.getItem("mostRecentScore");
let userName = localStorage.getItem("userName");

finalScore.innerText = mostRecentScore + userName ;