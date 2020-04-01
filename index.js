const createBoard = (rows, cols) => {
  const dictionary = ['A', 'X', 'C', 'Y', 'E', 'O', 'O', 'S', 'I', 'U', 'I', 'N', 'M', 'Y', 'O', 'E', 'P', 'D', 'A', 'I']
  let board = [],
      index = 0;
  
  for (let i = 0; i < rows; i++) {
    let temp = [];
    for (let j = 0; j < cols; j++) {
      temp.push(dictionary[index]);
      index++;
    }
    board.push(temp);
  }

  return board;
}



console.log(createBoard(5,4));