
//Release 1 - generate board ( with set alphabet)
function generateBoard(row, col) {
    let res = [];
    let alphabet = ['BCDFGHIJKLMNPQRSTVWXYZ', 'AEIOU']
    for (var i = 0; i < row; i++) {
        let temp = [];
        for (var j = 0; j < col; j++) {
            let randCorV = Math.round(Math.random()) // 0 ato 1 
            let randAlpha = Math.floor(Math.random() * alphabet[randCorV].length)
            temp.push(alphabet[randCorV][randAlpha])
        }
        res.push(temp)
    }
    return res
}

// console.log(generateBoard(5, 4))


//get the vowel
function getVowel(arr) {
    let vowel = 'AEIOU'
    let findVowel = [];
    let arrIndex = [];
    let index = 0
    let temp = [];
    let res = [];
    let tampung = []
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            //looping vowels
            for (var k = 0; k < vowel.length; k++) {
                if (arr[i][j] == vowel[k]) {
                    findVowel.push(arr[i][j])
                    arrIndex.push(index)
                }
            }
            index++
        }

    }
    tampung.push(findVowel, arrIndex)
    console.log(tampung)
    let vowels = ['A', 'E', 'I', 'O', 'U']
    //looping tampung index
    // var index2 = 0
    for (var n = 0; n < tampung[1].length; n++) {
        let temp2 = [];
        //     if(vowels.includes(tampung[1][n]))

        if (tampung[1][n + 1] === tampung[1][n] + 1 && tampung[1][n + 3] === tampung[1][n + 2] + 1 && tampung[1][n + 2] == tampung[1][n + 1] + 3 && tampung[1][n] % 4 !== 0) {
            temp2.push([tampung[0][n], tampung[0][n + 1]], [tampung[0][n + 3], tampung[0][n + 2]])
        } else if (tampung[1][n + 1] === tampung[1][n] + 1 && tampung[1][n + 4] === tampung[1][n + 3] + 1 && tampung[1][n + 3] === tampung[1][n + 1] + 3 && tampung[1][n] % 4 !== 0) {
            temp2.push([tampung[0][n], tampung[0][n + 1]], [tampung[0][n + 4], tampung[0][n + 3]])
        }
        if (temp2.length > 0) {
            res.push(temp2)
        }

        // for (var o = index2 + 1; o < tampung[1].length; o++) {
        //     var temp2 = []
        //     temp2.push(tampung[index2])
        //     if (tampung[1][o] === temp2[0] + 1) {
        //         temp2.push(tampung[0][o])
        //         for (var p = o + 1; p < tampung[1].length; p++) {
        //             if (tampung[1][p] === (temp2[1] + 3))
        //                 temp2.push(tampung[0][p])
        //             for (var q = p + 1; q < tampung[1].length; q++) {
        //                 if (tampung[1][q] === (temp[2] + 1))
        //                     temp2.push(tampung[0][q])
        //                 break
        //             }
        //             // break
        //         }
        //         // break
        //     }
        //     // break
        // }
        // index2++
        // console.log(temp2)
        // if (temp2.length > 3) {
        //     res.push(temp2)
        // }
    }
    return res
}
// console.log(temp2)




var board = generateBoard(5, 4)
console.log(board)
console.log(getVowel(board))
