
function generateBoard (col, row) {
  let board = [];
  let max = 26;

  for(let i = 0; i < row; i++ ) {
    board[i] = []
    for(let j = 0; j < col; j++) {
      let alphaRand = String.fromCharCode(65 + Math.floor((Math.random() * max)));
      board[i][j] = alphaRand;
    }
  }
  // // test case
  // let board1 = [["A","X","C","Y"],
  //               ["E","O","O","S"],
  //               ["I","U","I","N"],
  //               ["M","Y","O","E"],
  //               ["P","D","A","I"]];

  return board;
}

console.log(generateBoard(5,3));

function checkVowel(board = generateBoard(5,3)) {
  let vowel = ["A","I","U","E","O"];
  let counter = 0;
  for(let i = 0; i < board.length-1; i++) {
    for(let j = 0; j < board[i].length-1; j++) {
        if(vowel.includes(board[i][j]) && vowel.includes(board[i+1][j])  && vowel.includes(board[i][j+1])  && vowel.includes(board[i+1][j+1])) {
          counter++;
        }

    }
  }
  return counter;
}


console.log(checkVowel());
