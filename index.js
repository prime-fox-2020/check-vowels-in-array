function vowelsInArray(row, col) {
    let alphabet = 'AXCYEOOSIUINMYOEPDAI'
    let array = []
    for(let i = 0; i < row; i++) {
        let temp = [];
        for(let j = 0; j < col; j++) {
            temp.push(alphabet[j+(i*col)])
        }
        array.push(temp)
    }
    return array;
}

function getBlock(arr) {
    arr = vowelsInArray(5,4);
    let count = 0;
    let indexVowels = [];
    for(let i = 0; i < arr.length; i++) {
        let temp = [];
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === 'A' || arr[i][j] === 'I' || arr[i][j] === 'U' || arr[i][j] === 'E' || arr[i][j] === 'O') {
                temp.push(j)
            }
        }
        indexVowels.push(temp)
    }
    for(let i = 0; i < indexVowels.length - 1; i++) {
        if(indexVowels[i].length === indexVowels[i+1].length) {
            if(indexVowels[i].length > 2) {
                count += indexVowels[i].length - 1;
            } else {
                count++;
            }
        }
    }
    return count;
}

console.log(getBlock());


