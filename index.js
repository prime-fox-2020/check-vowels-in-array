function generateArray(row, col){
    const vowels = 'AEIOU'
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let count = 0

    const arrayRow = []
    for (let i = 0; i<row; i++){
        const arrayCol = []
        for(let j = 0; j<col; j++){
            if (Math.random() > 0.25){
                let random = Math.floor(Math.random()*alphabet.length)
                arrayCol.push(alphabet[random])
            } else {
                let random = Math.floor(Math.random()*vowels.length)
                arrayCol.push(vowels[random])
            }
        }
        arrayRow.push(arrayCol)
    }
    return arrayRow
}



function checkVowels(arr){
    // const vowel = 'AEIOU'
    let yesVowel = 0

    for (let i = 0; i<arr.length-1; i++){
        for (let j = 0; j<arr[i].length-1; j++){
            let arrTemp = []
            if (arr[i][j] === 'A' || arr[i][j] === 'I' || arr[i][j] === 'U' || arr[i][j] === 'E' || arr[i][j] === 'O'){
                arrTemp.push('ya')
            } else {
                arrTemp.push('no')
            }
            if (arr[i][j+1] === 'A' || arr[i][j+1] === 'I' || arr[i][j+1] === 'U' || arr[i][j+1] === 'E' || arr[i][j+1] === 'O'){
                arrTemp.push('ya')
            } else {
                arrTemp.push('no')
            }
            if (arr[i+1][j] === 'A' || arr[i+1][j] === 'I' || arr[i+1][j] === 'U' || arr[i+1][j] === 'E' || arr[i+1][j] === 'O'){
                arrTemp.push('ya')
            } else {
                arrTemp.push('no')
            }
            if (arr[i+1][j+1] === 'A' || arr[i+1][j+1] === 'I' || arr[i+1][j+1] === 'U' || arr[i+1][j+1] === 'E' || arr[i+1][j+1] === 'O'){
                arrTemp.push('ya')
            } else {
                arrTemp.push('no')
            }
            
            console.log(arrTemp)
            let count = 0
            for (var b = 0; b<arrTemp.length; b++){
                if(arrTemp[b] === 'ya'){
                    count++
                }
            }

            if (count === 4){
                yesVowel++
            }
        }
    }
    return yesVowel
}

let array = generateArray(5,4)
console.log(array)
console.log(checkVowels(array))
