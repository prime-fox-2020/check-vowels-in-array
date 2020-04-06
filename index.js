generateBoard = (row, column) => {
    let cache = [], letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', dummies = 'AXCY,EOOS,IUIN,MYOE,PDAI';
    
    dummies = dummies.split(',')
    for (let x=0;x<row;x++) {
        /* 
        *
        * uncomment this line to use random letters
        * 
        */
/*         cache.push([])
        for (let y=0;y<column;y++) {
            cache[x].push(letters[Math.floor(Math.random() * 26)])
        } */

        cache.push(dummies[x].split(''))
    }

    return cache;
}

checkAllVowelsInArray = board => {
    let vowels = 'AIUEO', counter = 0;
    for (let x = 0; x < board.length-1; x++) {
        for (let y = 0; y < board[x].length-1; y++) {
            counter += vowels.indexOf(board[x][y]) !== -1 &&
                     vowels.indexOf(board[x][y+1]) !== -1 &&
                     vowels.indexOf(board[x+1][y]) !== -1 &&
                     vowels.indexOf(board[x+1][y+1]) !== -1 ? 1 : 0;
        }
    }

    return counter;
}

console.log(generateBoard(5,4))
console.log(checkAllVowelsInArray(generateBoard(5,4)))
