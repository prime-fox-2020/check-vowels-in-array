//#region release 0 - Generate Board
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const generateBoard = (rows, cols) => {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let board = [];
  for (let row = 0; row < rows; row++) {
    board.push([]);
    for (let col = 0; col < cols; col++) {
      const randomAlphabet = alphabets.charAt(getRandomInt(0, alphabets.length));
      board[row].push(randomAlphabet);
    }
  }

  return board;
};
//#endregion

// driver code release 0
let board1 = generateBoard(5, 4);
console.log(`Release 0 - Try 1\n`, board1);
console.log(`\nRelease 0 - Try 2\n`, board1);

//#region release 1 - Get Block Filled with Vowels
const getBlocks = (board) => {
  let blocks = [];

  for (let i = 0; i < board.length - 1; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      blocks.push([board[i][j], board[i][j + 1], board[i + 1][j], board[i + 1][j + 1]]);
    }
  }

  return blocks;
};

const getVowels = (letters) => {
  let vowels = letters.join('').match(/[aeiou]/gi);
  return vowels === null ? 0 : vowels.length;
};

const getBlocksWithVowels = (board) => {
  let blocks = 0;

  getBlocks(board).forEach(letters => {
    if (getVowels(letters) === letters.length) blocks++;
  });

  return blocks;
};
//#endregion

// driver code release 1
let board2 = [
  ['A', 'X', 'C', 'Y'],
  ['E', 'O', 'O', 'S'],
  ['I', 'U', 'I', 'N'],
  ['M', 'Y', 'O', 'E'],
  ['P', 'D', 'A', 'I']
];

let board3 = [
  ['A', 'i', 'C', 'Y'],
  ['E', 'O', 'O', 'S'],
  ['I', 'U', 'I', 'N'],
  ['M', 'I', 'O', 'E'],
  ['P', 'D', 'A', 'I']
];
console.log(`\nRelease 1 - try 1\n`, board2);
console.log(`Vowel Blocks: ${getBlocksWithVowels(board2)}`);
console.log(`\nRelease 1 - try 2\n`, board3);
console.log(`Vowel Blocks: ${getBlocksWithVowels(board3)}`);