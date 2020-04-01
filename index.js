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