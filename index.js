// Immutable hangman
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

//display guess
function showGuess(word, guesses) {
  return word
    .split('')
    .map(letter => (guesses.includes(letter) ? letter : '_'))
    .join(' ');
}

//check for winner
function isWinner(word, guesses) {
  const wordToArray = word.split('');
  const filteredLetters = wordToArray.filter(letter => guesses.includes(letter));
  wordToArray.join('');
  filteredLetters.join('');

  return wordToArray.length === filteredLetters.length ? true : false;
}

function next(word, guesses) {
  Object.freeze(guesses);
  rl.question('next letter? ', answer => {
    const nextGuesses = [...guesses, answer];
    console.log('Player chose:', answer);
    if (isWinner(word, guesses)) {
      console.log('YOU WIN !!!');
    } else if (nextGuesses.length === 6) {
      console.log('"YOU LOSE!!!');
    } else {
      next(word, nextGuesses);
      console.log('show guess: ', showGuess(word, nextGuesses));
    }
  });
}

next('hello', []);
