/*
    Steven Tran
    Assignment 3 Exercise
    See Console for answer
*/

//declare variables
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guesses = [];

var userGuess;
var passedGuess = document.getElementById("lettersGuessed");
var win = document.getElementById("win");
var loss = document.getElementById("loss");
var guessLeft = document.getElementById("guessLeft");

var winCount = 0;
var lossCount = 0;
var guessCount = 10;
//console.log(alphabet.length);

//Random pick from alphabet
var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerPick);
document.onkeyup = function(event){
    userGuess = event.key;
    userGuess.toLowerCase();

    if (userGuess == computerPick){
        alert("You Guessed Right!! The Letter was: " + computerPick);
        winCount++;
        win.textContent = winCount;
        guessCount = 10;
        guessLeft.textContent = guessCount;
        computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerPick);
        passedGuess.textContent = "";
        guesses = [];
    }
    else if (guesses.indexOf(userGuess) != -1){
        alert("letter already choosen");
    }
    else if (guessCount > 0){
        guessLeft.textContent = guessCount--;
        //console.log(guessCount);
        passedGuess.textContent += (userGuess + " ");
        guesses.push(userGuess);
    }
    else{
        lossCount++;
        loss.textContent=lossCount;
        alert("You Lose! Try Again");
        guessCount = 10;
        guessLeft.textContent = guessCount;
        computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerPick);
        passedGuess.textContent = "";
        guesses = [];
    }
}


