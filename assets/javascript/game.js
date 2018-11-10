// set global variables and arrays 
//------------------------------------------------------------------------\\
// these are my text variables for display outputs 
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userGuess-text");
var computerChoiceText = document.getElementById("computerChoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesRemainingText = document.getElementById("guessesremaining-text")

// these are my game variables 
var guessesRemaining = 9;
var lettersGuessed = [];
var wins = 0;
var losses = 0;
// this is my user and computer choice array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//randomly chooses a letter from the array.  this is the computer's choice 
var computerChoice;

function begingame() {
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log("computer choice: " + computerChoice);
    guessesRemaining = 9;
    guessesRemainingText.innerHTML = guessesRemaining;
}

begingame()
// Need an on key up event function 
document.onkeyup = function (event) {

    // assign userGuess to whichever letter user clicked.
    var userGuess = event.key;
    console.log("user guess:" + userGuess);
    userChoiceText.innerHTML = "You guessed: " + userGuess;
    // if/else statements 

    if (userGuess === computerChoice) {
        wins++;
        winsText.innerHTML = "You win!: " + wins;
        alert("You Win! I was thinking of " + computerChoice + "!")
        begingame();
    }
    // reduce guesses remaining until we get to 0, then register a loss 
    else {
        guessesRemaining--;
        guessesRemainingText.innerHTML = guessesRemaining;


        if (guessesRemaining === 0) {
            losses++;
            lossesText.innerHTML = "Sorry! You lose: " + losses;
            alert("Sorry, you lose! I was thinking of " + computerChoice + "!")
            begingame();
        }
    }
}



