const main = (() => {
  const prompt = require("prompt-sync")();
  const gameText = require("./hangmanText");

  const levelGenerator = (word, level) => {
    const blankSpacesArr = [];
    let alphabetArr = gameText.alphabetStr.toLowerCase().split(",");

    for (let i = 0; i < word.length; i++) {
      word[i] === " " ? blankSpacesArr.push(" ") : blankSpacesArr.push("_");
    }

    let blankSpacesStr = blankSpacesArr.join("");

    let correctLetters = [];
    let incorrectLetters = [];
    let hangmanDrawings = gameText.HANGMANPICS;

    while (correctLetters.length < word.length) {
      let currentDisplayedDrawing = hangmanDrawings[incorrectLetters.length];

      //Display for hangman, drawings, blankspaces, available/incorrect letters
      gameText.hangmanScreen(
        level,
        blankSpacesStr,
        currentDisplayedDrawing,
        alphabetArr,
        incorrectLetters
      );

      const guessedLetter = prompt("Please enter a letter ");
      const indices = [];

      //Handle available and repeated letters
      if (guessedLetter.length !== 1) {
        console.log("Please enter one letter only");
        continue;
      } else if (alphabetArr.indexOf(guessedLetter) === -1) {
        console.log("This letter has already been guessed");
        continue;
      } else {
        let indexToRemove = alphabetArr.indexOf(guessedLetter);
        alphabetArr.splice(indexToRemove, 1);
      }

      //Handle correct or incorrect letter
      if (word.includes(guessedLetter)) {
        for (let i = 0; i <= word.length; i++) {
          if (word[i] === guessedLetter) {
            indices.push(i);
            correctLetters.push(i);
          }
        }
      } else {
        incorrectLetters.push(guessedLetter);
        console.log("The Answer does not contain that letter :( ");
      }

      //Replace Blank spaces with actual letter

      for (let i = 0; i < indices.length; i++) {
        blankSpacesStr =
          blankSpacesStr.substring(0, indices[i]) +
          guessedLetter +
          blankSpacesStr.substring(indices[i] + 1);
      }

      //lose conditions
      if (incorrectLetters.length > 9) {
        console.log("You LOSE :(");
        const restart = prompt("Enter any key to Play Again ");
        return "LOST";
      }
    }

    //win conditions
    console.log(word);
    if (level === 5) {
      console.log("Congrats You Have Won the game");
      const restart = prompt("Enter any key to Play Again ");
    } else {
      console.log(
        `Congratulations you have completed this level. Now moving on to level ${
          level + 1
        }`
      );
    }
  };

  //Launch Screen
  let launchCounter = 0;

  while (launchCounter === 0) {
    console.log(gameText.launchScreen);

    const launchChoice = parseInt(prompt("Please enter chosen number "));

    if (launchChoice === 1) {
      console.log(gameText.menu);
      const category = parseInt(prompt("Please select category "));

      const categories = gameText.categories;

      const wordBank = gameText.pickWordBank(category, categories);

      const shuffledWordBank = wordBank.sort((a, b) => 0.5 - Math.random());

      for (let i = 0; i < 5; i++) {
        let outcome = levelGenerator(shuffledWordBank[i], i + 1);
        if (outcome === "LOST") break;
      }
    } else if (launchChoice === 2) {
      console.log(gameText.rules);
      const exitRules = prompt("To go back enter any key ");
    } else {
      launchCounter--;
    }
  }
})();
