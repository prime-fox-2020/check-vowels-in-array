const createBoard = (rows, cols) => {
  const dictionary = 'BCDFGHJKLMNPQRSTVWXYZ';
  const vowelsDictionary = 'AIUEO';
  const vowels = {
    A: true,
    I: true,
    U: true,
    E: true,
    O: true
  };

  let board = [],
      index,
      total = 0;
  
  for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = 0; j < cols; j++) {
      if (Math.floor(Math.random() * 2)) {
        index = Math.floor(Math.random() * 5);
        temp.push(vowelsDictionary[index]);
      } else {
        index = Math.floor(Math.random() * 21);
        temp.push(dictionary[index]);
      }
    }
    board.push(temp);
  }

  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < cols - 1; j++) {
      if (vowels[board[i][j]] && vowels[board[i][j + 1]] && vowels[board[i + 1][j]] && vowels[board[i + 1][j + 1]] ) total++;
    }
  }
  // console.log(board);
  return total;
}

console.log(createBoard(5, 4));