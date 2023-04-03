let finalScore = document.getElementById('final-score');
let mostRecentScore = localStorage.getItem("mostRecentScore");
let userLevel = localStorage.getItem("userLevel");

finalScore.innerText = `${mostRecentScore} @ ${userLevel} Level` ;

if (userLevel == 'Easy' && mostRecentScore < 4) {
    document.getElementById('final-message').innerText = "Start Exploring!! There is so much more to learn!";
} else if (userLevel == 'Easy' && mostRecentScore < 8) {
    document.getElementById('final-message').innerText = "Nice work! See if you can improve!";
} else if (userLevel == 'Easy' && mostRecentScore <= 10) {
    document.getElementById('final-message').innerText = "Excellent result at the easy level! Why not try the next level?";
} else if (userLevel == 'Intermediate' && mostRecentScore < 4) {
    document.getElementById('final-message').innerText = "Good progress!! Keep learning!";
} else if (userLevel == 'Intermediate' && mostRecentScore < 8) {
    document.getElementById('final-message').innerText = "Nice work! See if you can improve!";
} else if (userLevel == 'Intermediate' && mostRecentScore <= 10) {
    document.getElementById('final-message').innerText = "Excellent result at the intermediate level! Try the next level?";
} else if (userLevel == 'Advanced' && mostRecentScore < 4) {
    document.getElementById('final-message').innerText = "Good job!! Keep learning!";
} else if (userLevel == 'Advanced' && mostRecentScore < 8) {
    document.getElementById('final-message').innerText = "Check out a map! See if you can figure out the answers!";
} else if (userLevel == 'Advanced' && mostRecentScore <= 10) {
    document.getElementById('final-message').innerText = "Excellent result at the advanced level! Are you ready to be an expert?";
} else if (userLevel == 'Expert' && mostRecentScore < 4) {
    document.getElementById('final-message').innerText = "Good job!! Keep learning!";
} else if (userLevel == 'Expert' && mostRecentScore < 8) {
    document.getElementById('final-message').innerText = "Wow!! You probably love studying maps!!!";
} else if (userLevel == 'Expert' && mostRecentScore <= 10) {
    document.getElementById('final-message').innerText = "Amazing!! Do you know the capitals of the remaining 155 countries aswell?";
} else {
    document.getElementById('final-message').innerText = "Great work!";
}

