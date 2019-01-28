//create secretNumber
var secretNumber = 11;

//ask user for a guess
var stringGuess = prompt("Guess a number between 1-100");
var guess = Number(stringGuess);

//check if guess is right
if (guess === secretNumber) {
  alert("YOU GOT IT RIGHT!");
}

//otherwise, check if higher or lower
else if (guess > secretNumber) {
  alert("Too high. Guess again");
} else {
  alert("Too low. Guess again");
}
