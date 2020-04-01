function generateBoard(row, column) {
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let vowel = 'AIUEO';
  let board = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      let random = Math.floor(Math.random() * 26);
      let vowRandom = Math.floor(Math.random() * 5);
      if (Math.random() < 0.4) {
        if (!board[i]) {
          board.push([alpha[random]]);
        } else {
          board[i].push(alpha[random]);
        }
      } else {
        if (!board[i]) {
          board.push([vowel[vowRandom]]);
        } else {
          board[i].push(vowel[vowRandom]);
        }
      }
    }
  }
  
  return board;
}
// let theBoard = generateBoard(5, 4);

function getBlock(board) {
  let vowel = 'AIUEO';
  let result = 0;
  let temp;

  for (let i = 0; i < board.length-1; i++) {
    for (let j = 0; j < board[i].length-1; j++) {
      temp = board[i][j] + board[i][j+1] + board[i+1][j] + board[i+1][j+1];
      count = 0;
      for (let k = 0; k < temp.length; k++) {
        if (vowel.indexOf(temp[k]) != -1) count++;
      }
      if (count === 4) result++;
    }
  }
  return result;
}

// console.log(getBlock(theBoard));
