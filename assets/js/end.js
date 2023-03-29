let finalScore = document.getElementById('final-score');
let mostRecentScore = localStorage.getItem("mostRecentScore");
let userLevel = localStorage.getItem("userLevel");
// let scoreLog = localStorage.getItem("scoreLog");

finalScore.innerText = `${mostRecentScore} @ ${userLevel} Level` ;

// Save the username

// function saveUserName() {
//     userName = document.getElementById('username').textContent;
// }

// console.log(userName);

// Save final score and level of each game in an array
    const score = [
        { 
        level: userLevel,
        score: mostRecentScore,
        }
    ]

    // localStorage.setItem("ScoreLog",score);
    // scoreLog.push(score)


console.log(score);