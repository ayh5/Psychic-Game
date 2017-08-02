
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

/*Array holds user letter choices*/
var guesses = []; 

var userChoice = null;

//Computer random letter
var compChoice = letters[Math.floor(Math.random() * letters.length)];

var htmlGuessesLeft = function(){
	document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var htmlUserChoice = function(){
	this.userChoice = this.letters[Math.floor(Math.random() * letters.length)];
};

var htmlGuessesSoFar = function(){
	document.querySelector('#guessesSoFar').innerHTML = "YourGuesses so far: " + guesses.join(', ');

};

var reset = function(){
	guessesLeft = 9;
	guesses = [];

	htmlGuessesLeft();
	htmlUserChoice();
	htmlGuessesSoFar();
}


document.onkeyup = function(event) {
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
}

userChoice.push()

/*The indexOf() method returns the position of the first occurrence of a specified value in a string.
This method returns -1 if the value to search for never occurs. */

if (guesses.indexof(userChoice) < 0 && letters.indexof(userChoice) >= 0) {
	guesses[guesses.length]=userChoice;
	guessesLeft--; 
}

if (userChoice === compChoice) {
	wins++;
	document.querySelector('#wins').innerHTML = "Wins: " + wins;
	console.log("You won!");
	reset();

 if (guessesLeft === 9) {
 	losses++;
 	console.log("You Lost!");
 	guessesLeft = 9;
 	guesses = [];
	compChoice = letters[Math.floor(Math.random() * letters.length)];

	console.log("Wins: " + wins + "Losses: " + losses + "Guesses left" + guessesLeft + "Guesses so far: " + guesses + "Computer picked: " + compChoice);
 }
