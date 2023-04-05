let finalScore = document.getElementById('final-score');
let finalScoreUser = document.getElementById('final-score-user');
let mostRecentScore = localStorage.getItem("mostRecentScore");
let userLevel = localStorage.getItem("userLevel");
let user = window.localStorage.getItem("username");

finalScoreUser.innerText = `Hi ${user}! Your final score was:` ;
finalScore.innerText = `${mostRecentScore} @ ${userLevel} Level` ;
console.log(user);

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

// const playagain = document.getElementById("play-again-btn");

// playagain.addEventListener('click', returntostart);

// /**
//  * This function validates that a username was input. It shows an error message if not.
//  * If a username is provided it saves it so it can be displayed throughout the game.
//  * @param {event} e - event of a click
//  */
// function returntostart(e) {
//     e.preventDefault();

//     user = window.localStorage.getItem("username");

//     if (!user) {
//         console.log('No username given');
//         load(startOver);
//     }

//     if (user) {
//         console.log(user);
//         load(startOver);
//         // window.localStorage.setItem("username", usernameField.value);
//         document.getElementById("levelchoice-area").style.display = "initial";
//         document.getElementById("username-area").style.display = "none";
//         // window.localStorage.setItem("username", usernameField.value);
        
//     }
// }

// /**
//  * This function delays the loading of myURL
//  * @param {string} myURL - URL is loaded with time delay 
//  */
// function load(myURL) {
//     setTimeout(myURL, 1000);
// }

// /**
//  * This function loads the last page when the game is over
//  */
// function startOver () {
//     window.location.assign('index.html');
// }