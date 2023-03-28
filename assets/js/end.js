let finalScore = document.getElementById('final-score');
let mostRecentScore = localStorage.getItem("mostRecentScore");
let userLevel = localStorage.getItem("userLevel");

finalScore.innerText = `${mostRecentScore} @ level  ${userLevel}` ;

// Save final score and level of each game in an array

const score = [
    { 
    level: userLevel,
    score: finalScore
    }
]

console.log(score);