function guessingGame(number = Math.floor(Math.random() * 100)) {
  this.guesses = 0;
  this.gameOver = false;

  const guess = (userGuess) => {
    if (this.gameOver) {
      return "The game is over, you already won!";
    }
    if (userGuess < number) {
      this.guesses += 1;
      return `${userGuess} is too low!`;
    }
    if (userGuess > number) {
      this.guesses += 1;
      return `${userGuess} is too high!`;
    }
    if (userGuess === number) {
      this.gameOver = true;
      this.guesses += 1;
      return `You win! You found ${number} in ${this.guesses} guesses.`;
    }
  };
  return guess;
}

module.exports = { guessingGame };
