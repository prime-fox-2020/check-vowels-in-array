
function generateBoard(row, column) {
    let words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let board = []
    for (let i = 0; i < row; i++) {
        let temp = []
        for (let j = 0; j < column; j++) {
            let randomWord = Math.floor(Math.random() * 25)
            temp.push(words[randomWord])
        }
        board.push(temp)
    }
    return board
}

let board = [
    [ 'E', 'O', 'O', 'S' ],
    [ 'I', 'U', 'I', 'N' ],
    [ 'M', 'Y', 'O', 'E' ],
    [ 'P', 'D', 'A', 'I' ]
  ]

function checkVowels(board) {
    let vowels = 'AIUEO';
    let countVowels = 0;

    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            let temp = '';
            temp += board[i][j];
            temp += board[i][j + 1];
            temp += board[i + 1][j];
            temp += board[i + 1][j + 1];

            let countTemp = 0;
            for (let k = 0; k < temp.length; k++) {
                for (let l = 0; l < vowels.length; l++) {
                    if (vowels[l] === temp[k]) {
                        countTemp++;
                    }
                }
            }
            if (countTemp === 4) {
                countVowels++;
            }
        }
    }
    return countVowels;
}

// console.log(board)
// console.log(checkVowels(board))
let randomBoard = generateBoard(4, 4)
console.log(randomBoard);
console.log(checkVowels(randomBoard))
