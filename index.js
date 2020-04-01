const createBoard = (rows, cols) => {
  const dictionary = ['A', 'X', 'C', 'Y', 'E', 'O', 'O', 'S', 'I', 'U', 'I', 'N', 'M', 'Y', 'O', 'E', 'P', 'D', 'A', 'I'];
  const vowels = {
    A: true,
    I: true,
    U: true,
    E: true,
    O: true
  };

  let board = [],
      index = 0,
      total = 0;
  
  for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = 0; j < cols; j++) {
      temp.push(dictionary[index]);
      index++;
    }
    board.push(temp);
  }

  for (let i = 0; i < rows - 1; i++) {
    for (let j = 0; j < cols - 1; j++) {
      if (vowels[board[i][j]] && vowels[board[i][j + 1]] && vowels[board[i + 1][j]] && vowels[board[i + 1][j + 1]] ) total++;
    }
  }
  console.log(board);
  return total;
}



console.log(createBoard(5,4));