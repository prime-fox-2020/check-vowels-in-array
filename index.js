function checkVowelsInArray(numX, numY) {
    let array = []
    let counter = 0
    const vowels = "AUIEO"
    const consonant = "BCDFGHJKLMNPQRSTVWXYZ"
    for (let i = 0; i < numX; i++) {
        let temp = []
        let str = ""
        for (let j = 0; j < numY; j++) {
            let random = Math.floor(Math.random() * 2)
            if(random == 0){
                str = vowels[Math.floor(Math.random() * vowels.length)]
                temp.push(str)
            }else if(random == 1){
                str = consonant[Math.floor(Math.random() * consonant.length)]
                temp.push(str)
            }
        }
        array.push(temp)
    }
    for (let k = 0; k < array.length - 1; k++) {
        for (let l = 0; l < array[k].length - 1; l++) {
            if (vowels.indexOf(array[k][l]) !== -1) {
                if ((vowels.indexOf(array[k + 1][l] )!== -1) && (vowels.indexOf(array[k][l + 1] )!== -1) && (vowels.indexOf(array[k + 1][l + 1])) !== -1){
                    counter +=1
                }
            }
        }
    }
    console.log(array)
    return counter
}


console.log(checkVowelsInArray(5,4))