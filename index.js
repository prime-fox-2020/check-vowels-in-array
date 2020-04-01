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

console.log(generateBoard(4 + Math.round(Math.random() * 2), 4 + Math.round(Math.random() * 2)));
