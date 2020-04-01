'use strict';

function generateBoard(row, column) {
    const board = [];
    for (let line = 0; line < row; line++) {
        const lineArr = []
        for (let cell = 0; cell < column; cell++) {
            lineArr.push(randomAlphabet());
        }
        board.push(lineArr);
    }
    return board;
}

function randomAlphabet() {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
    let char = '';
    let coin = Math.round(Math.random());
    if (coin == 1) { // vowel
        char = vowels[Math.round(Math.random() * 4)];
    } else { // consonant
        char = consonants[Math.round(Math.random() * 20)];
    }
    return char;
}

function squareVowels(row, column) {
    const board = generateBoard(row, column);
    let count = 0;
    console.log(board);
    for (let down = 0; down < row - 1; down++) {
        for (let right = 0; right < column - 1; right++) {
            let cell0 = checkVowels(board[down][right]);
            let cell1 = checkVowels(board[down][right + 1]);
            let cell2 = checkVowels(board[down + 1][right]);
            let cell3 = checkVowels(board[down + 1][right + 1]);
            if (cell0 && cell1 && cell2 && cell3) {
                count++;
            }
        }
    }
    return `Number of vowel block: ${count}`;
}

function checkVowels(char) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < 4; i++) {
        if (char == vowels[i]) {
            return true;
        }
    }
    return false;
}

console.log(squareVowels(3 + Math.round(Math.random() * 5), 3 + Math.round(Math.random() * 3)));