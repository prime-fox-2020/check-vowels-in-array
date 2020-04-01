function generateBoard(row, column) {
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let vowel = 'AIUEO';
  let board = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      let random = Math.floor(Math.random() * 26);
      let vowRandom = Math.floor(Math.random() * 5);
      if (Math.random() < 0.3) {
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
// console.log(generateBoard(4, 6));