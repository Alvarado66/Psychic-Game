// If player presses key, 
    // it STARTS THE GAME.

// if player presses CORRECT KEY, 
    // appear on the screen.

// if player guesses INCORRECTLY, 
    // subract an attempt. (5 attempts per word) and STORE IT.

// if player guesses the word CORRECTLY, 
    // alert they won.

// if out of attempts, 
    // RESET with a new word.

const Characters=["Jim","Pam","Dwight","Michael","Creed","Kevin","Oscar","Meredith","Phyllis","Stanley","Andy","Angela"]
let userWord = myWord(Characters);
var playerGuess =[] 
 

 function myWord(Characters) {
    return Characters[Math.floor(Math.random() * Characters.length)];
    
}
console.log(userWord)
 
for (var i = 0; i < userWord.length; i++) {
    playerGuess[i] = "_"
    
}

document.onkeydown = function (event) {
    
    console.log(playerGuess) 

    for (let i=0; i < userWord.length; i++) {

        if (event.key.toLowerCase() === userWord.toLowerCase().charAt(i)) {
            playerGuess.splice(i, 1, event.key)
            console.log("You've guessed correctly!")
        } 
        else {
            console.log("Sorry, Please try again!")
        } 
    }
    // return playerGuess
}





console.log(playerGuess)