function generateBoard(row, column) {
    const char = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let result = [];
    for (let a = 0; a < row; a++) {
        let temp = [];
        for (let b = 0; b < column; b++) {
            temp.push(char[random()]);
        }
        result.push(temp);
    }
    console.log(checkBlock(result));
    return result;
}

let random = () => {
    return Math.floor(Math.random()*104/4);
}

function checkBlock(arr) {
    const vowel = ['A', 'I', 'U', 'E', 'O'];
    let block = 0;
    for (let a = 0; a < arr.length - 1; a++) {
        for (let b = a; b < arr[a].length - 1; b++) {
            let count = 0;
            for (let c = 0; c < vowel.length; c++) {
                if (arr[a][b] === vowel[c]) {
                    count++;
                } 
                if (arr[a][b + 1] === vowel[c]) {
                    count++;
                } 
                if (arr[a + 1][b] === vowel[c]) {
                    count++;
                }
                if (arr[a + 1][b + 1] === vowel[c]) {
                    count++;
                }
            }
            if (count == 4) {
                block++;
            }
            
        }
        
    }
    return block;
}

console.log(generateBoard(5, 4));

