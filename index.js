
// Dengan Huruf Random

function randomNum(minNum, letter) {
    let randomNum = Math.floor(Math.random() * (letter.length - minNum)) + minNum;
    return randomNum 
}

function createBoard(rows, columns, min, huruf) {
    let rowArr = []
    for (let i = 0; i < rows; i++) {
        let columnsArr = []
        for (let j = 0; j < columns; j++) {
            let numInRand = randomNum(min, huruf)
            columnsArr.push(huruf[numInRand])
        }
        rowArr.push(columnsArr);
    }
    return rowArr
}

function vocalCheck(baris, kolom, minimalNum, char) {
    let board = createBoard(baris, kolom, minimalNum, char)
    let hitungVocalPerBlock = 0
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            var arr = []
            if (board[i][j] == 'A' || board[i][j] == 'I' || board[i][j] == 'U' || board[i][j] == 'E' || board[i][j] == 'O') {
                arr.push('ya')
            } else {
                arr.push('no')
            }
            if (board[i][j + 1] == 'A' || board[i][j + 1] == 'I' || board[i][j + 1] == 'U' || board[i][j + 1] == 'E' || board[i][j + 1] == 'O') {
                arr.push('ya')
            } else {
                arr.push('no')
            }
            
            if (board[i + 1][j] == 'A' || board[i + 1][j] == 'I' || board[i + 1][j] == 'U' || board[i + 1][j] == 'E' || board[i + 1][j] == 'O') {
                arr.push('ya')
            } else {
                arr.push('no')
            }
            if (board[i + 1][j + 1] == 'A' || board[i + 1][j + 1] == 'I' || board[i + 1][j + 1] == 'U' || board[i + 1][j + 1] == 'E' || board[i + 1][j + 1] == 'O') {
                arr.push('ya')
            } else {
                arr.push('no')
            }
            
            let count = 0
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] == 'ya') {
                    count++
                }
            }

            if (count == 4) {
                hitungVocalPerBlock++
            }
            
        }
    }
    return 'Vocal block: ' + hitungVocalPerBlock

    
}


let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(vocalCheck(100, 100, 1, alphabet));


// Dengan Dummy
/*

function vocalCheck(board) {
    let board = dummy
    let hitungVocalPerBlock = 0
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[i].length - 1; j++) {
            var arr = []
            if (board[i][j] == 'A' || board[i][j] == 'I' || board[i][j] == 'U' || board[i][j] == 'E' || board[i][j] == 'O') {
                arr.push('ya')
            } else {
                arr.push('no')
            }
            if (board[i][j + 1] == 'A' || board[i][j + 1] == 'I' || board[i][j + 1] == 'U' || board[i][j + 1] == 'E' || board[i][j + 1] == 'O') {
                arr.push('ya')
            } else {
                arr.push('no')
            }
            
            if (board[i + 1][j] == 'A' || board[i + 1][j] == 'I' || board[i + 1][j] == 'U' || board[i + 1][j] == 'E' || board[i + 1][j] == 'O') {
                arr.push('ya')
            } else {
                arr.push('no')
            }
            if (board[i + 1][j + 1] == 'A' || board[i + 1][j + 1] == 'I' || board[i + 1][j + 1] == 'U' || board[i + 1][j + 1] == 'E' || board[i + 1][j + 1] == 'O') {
                arr.push('ya')
            } else {
                arr.push('no')
            }
            
            let count = 0
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] == 'ya') {
                    count++
                }
            }

            if (count == 4) {
                hitungVocalPerBlock++
            }
            
        }
    }
    return 'Vocal block: ' + hitungVocalPerBlock

    
}

let dummy = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'Y'],
    ['I', 'U', 'I', 'Y'],
    ['A', 'X', 'O', 'E'],
    ['A', 'X', 'A', 'I']
]

console.log(vocalCheck(dummy));

*/