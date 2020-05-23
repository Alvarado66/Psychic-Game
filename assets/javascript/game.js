// This style/layout was obtained from "https://github.com/Kbowen200247/Psychic-Game/blob/master/assets/javascript/game.js"

const allLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// These are my global variables 
let userWins = 0;
let userLosses = 0;
let remainingGuesses = 9;
let userChoice = [];


// This creates a random letter that is to be guessed by the user
function computerChoice (allLetters) {
    allLetters[Math.floor(Math.random() * allLetters.length)];
}

// This is supposed to count how many guesses are left for the user
function guessCounter () {
    document.querySelector('#guessesLeft').innerHTML = " Guesses Left: " + remainingGuesses;

}
// This makes aware to the user of guesses already tried
function guessesUsed () {
    document.getElementById("userGuesses").innerHTML = "You've already used: " + userChoice.join(' ');
}
// this calls the function called guessCounter
guessCounter ();
// This resets the hidden letter at random again
let reset = function() {
    remainingGuesses = 10;
    userChoice = [];
    function computerChoice (allLetters) {
        allLetters[Math.floor(Math.random() * allLetters.length)];
    }
}
// When the key is pressed down it will activate the event and take any input to lowercase.
document.onkeydown = function(event) {
    remainingGuesses--;

    let userInput = String.fromCharCode(event.keyCode).toLowerCase();

    userChoice.push(userInput);
    guessCounter();
    guessesUsed();

    if (userInput === computerChoice) {
        userWins++;
        document.getElementById("numWins").innerHTML = "Wins: " + userWins;
        reset();
    }

    else if (remainingGuesses === 0) {
        userLosses++;
        document.getElementById("numLosses").innerHTML = "Losses: " + userLosses;
        reset();
    }
}