module.exports = {
  launchScreen: `
    hangman game
    
    to Start game enter 1...
    
    to view rules enter 2...
    
    to exit game enter any other key...
    `,
  rules: `Guess the letters in the secret word to solve the puzzle. 
    You can guess a letter by typing it on your keyboard. 
    Each time you guess a correct letter the game will show the position of that letter in the word, and if you solve the word,
     you move on to the next level. If you guess incorrectly more than 10 times you automatically lose. There are 5 levels to win this game
     `,

  menu: `
    MENU
    
    PLEASE SELECT CATEGORY:
      Random word: enter 1
      Trinibad Artist: enter 2
      Places: enter 3
      Trini Schools: enter 4
      Insta Celebs: enter 5
    `,

  categories: {
    "random word": ["computer", "dream", "destiny", "lifetime", "money"],
    "trinibad artist": ["rebel", "tafari", "klion", "plumpy", "swanny"],
    places: ["sealots", "cassava piece", "oropune", "arima", "barataria"],
    "trini schools": ["cic", "qrc", "st georges", "tranquil", "bishops"],
    "insta celebs": [
      "trinidad killa",
      "mouttxt",
      "jadakins",
      "swizzlestickman",
      "topdog donell",
    ],
  },
  pickWordBank: (category, categories) => {
    let wordBank = [];

    switch (category) {
      case 1:
        wordBank = categories["random word"];
        break;
      case 2:
        wordBank = categories["trinibad artist"];
        break;
      case 3:
        wordBank = categories["places"];
        break;
      case 4:
        wordBank = categories["trini schools"];
        break;
      case 5:
        wordBank = categories["insta celebs"];
        break;
      default:
        return console.log("Please enter a number from 1-5");
        break;
    }

    return wordBank;
  },
  hangmanScreen: (
    level,
    blankSpacesStr,
    currentDisplayedDrawing,
    alphabetArr,
    incorrectLetters
  ) => {
    if (alphabetArr.length === 26) {
      console.log(`Welcome to level ${level}`);
      console.log("\n");
      console.log(blankSpacesStr);
    } else {
      console.log("\n");
      console.log(`Welcome to level ${level}`);
      console.log("\n");
      console.log(`${currentDisplayedDrawing}`);
      console.log("\n");
      console.log(`Available letters: ${alphabetArr}`);
      console.log("\n");
      console.log(`Incorrect letters: ${incorrectLetters}`);
      console.log("\n");
      console.log(blankSpacesStr);
      console.log("\n");
    }
  },
  alphabetStr: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
  HANGMANPICS: [
    `
      
      
      
  |
  |
=========`,
    `
      
      
      
      |
      |
=========`,
    `
      +
      |
      |
      |
      |
      |
=========`,
    `
  +---+
      |
      |
      |
      |
      |
=========`,
    `
  +---+
  |   |
      |
      |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
    ` 
  +---+
  |   |
  O   |
 /|${String.raw`\ `} |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|${String.raw`\ `} |
 /    |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|${String.raw`\ `}  |
 / ${String.raw`\ `} |
      |
=========`,
  ],
};
