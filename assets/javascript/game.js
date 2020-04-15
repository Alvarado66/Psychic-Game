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

var Characters=["Jim","Pam","Dwight","Michael","Creed","Kevin","Oscar","Meredith","Phyllis","Stanley","Andy","Angela"]


var myWord = function () {
    return Characters[Math.floor(Math.random() * Characters.length)];
    
}
console.log(myWord())

    

document.onkeydown = function (event) {
    console.log(event.key)
}

