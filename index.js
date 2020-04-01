function generateAlphabet(row, col) {

    const kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let hasil = []
    for (let i = 0; i < row; i++) {
        let temp = []
        for (let j = 0; j < col; j++) {
            let angkaRandom = Math.round(Math.random() * 25)
            temp.push(kamus[angkaRandom])
        }
        hasil.push(temp)
    }
    // console.table(hasil);
    return hasil
}

// console.log(generateAlphabet(5, 5));

function checkSquere(I, J, arr) {
    let vocals = ['A', 'I', 'U', 'E', 'O']
    let check = true
    for (let i = I; i < I + 2; i++) {
        for (let j = J; j < J + 2; j++) {
            if (!vocals.includes(arr[i][j])) {
                check = false
            }
        }
    }
    return check
}

function checkVocal(arr) {

    let count = 0
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr[i].length - 1; j++) {
            if (checkSquere(i, j, arr)) {
                count++
                console.log('First Index In : ', arr[i][j], i, j);
            }
        }
    }

    console.log('Total Vowels: ', count);
    console.table(arr);
    return count
}



let dummy = [
    ['A', 'I', 'U', 'J'],
    ['E', 'O', 'A', 'K'],
    ['E', 'O', 'A', 'K']
]

checkVocal(dummy);
checkVocal(generateAlphabet(10, 10));
