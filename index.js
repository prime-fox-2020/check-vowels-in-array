function checkVowels(row,col) {
    let vokal = 'AIUEO'
    let konsonan = 'BCDFGHJKLMNPQRSTVWXYZ'

    let array = []
    for(let i = 0; i < row; i++) {
        let temp = []
        for(let j = 0; j < col; j++) {
            let roll = Math.round(Math.random()*2)
            if(roll > 1) {
                temp.push(konsonan.charAt(Math.ceil(Math.random() * konsonan.length-1)))
            } else {
                temp.push(vokal.charAt(Math.ceil(Math.random() * vokal.length-1)))
            }
        }
        array.push(temp)
    }
    
    let total = 0
    for(let i = 0; i < array.length-1; i++) {
        for(let j = 0; j < array[i].length-1; j++) {
            let box = [array[i][j],array[i][j+1],array[i+1][j+1],array[i+1][j]]
            let count = 0
            for(let a = 0; a < box.length; a++) {
                for(let b = 0; b < vokal.length; b++) {
                    if(box[a] == vokal[b]) {
                        count++
                    }
                }
            }
            if(count == box.length) {
                total++
            }
        }
    }
    return total
}

console.log(checkVowels(5,4))

