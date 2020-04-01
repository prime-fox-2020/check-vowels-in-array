let generateBoard = (rows, cols) => {
    const consonant = 'BCDFGHJKLMNPQRSTVWXYZ';
    const vowels = 'AIUEO';
    let alphabet = [];

    for (let i = 0; i < rows; i++) {
        let temp = [];
        for (let j = 0; j < cols; j++) {
            const dice = Math.floor(Math.random() * 2);
            temp.push(dice === 1 ? consonant[Math.floor(Math.random() * consonant.length)] : vowels[Math.floor(Math.random() * vowels.length)]);
        }
        alphabet.push(temp);
    }
    return alphabet;
}

let groupBoard = (array) => {
    const generate = array;
    let generateStorage = [];

    for(let i = 0; i < generate.length - 1; i++){
        for(let j = 0; j < generate[i].length -1; j++){
                generateStorage.push([generate[i][j], generate[i][j + 1], generate[i + 1][j], generate[i + 1][j + 1]]);
        }
    }
    return generateStorage;
}

let checkVowel = (array) => {
    const checkArray = groupBoard(array);
    const vowel = 'AIUEO';
    let count = 0;
    let check;
    
    for(let i = 0; i < checkArray.length; i++){
        check = 0;
        for(let j = 0; j < checkArray[i].length; j++){
            for(let k = 0; k < vowel.length; k++){
                if(checkArray[i][j] == vowel[k]){
                    check++;
                }
            }
        }
        if(check === 4){
            count++;
        }
    }
    return count;
}


console.log(checkVowel(generateBoard(5,4)));
console.log(generateBoard(5,4));