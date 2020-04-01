// Release 0

function generateBoard(row, col) {
    const kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // const jmlIsiKamus = kamus.length
    // console.log(jmlIsiKamus);
    let board = []
    for (let a = 0; a < row; a++) {
        let tamp = []
        for (let b = 0; b < col; b++) {
            // Isi dari kamus secara random
            let rdmKamus = Math.round(Math.random() * 25)
            tamp.push(kamus[rdmKamus])
        }
        board.push(tamp)
    }
    return board
}

// console.log(generateBoard(5, 4));

// Release 1
function checkBlock(I, J, arr) {
    let vowel = ['A', 'I', 'U', 'E', 'O']
    let check = true
    for (let i = I; i < I + 2; i++) {
        for (let j = J; j < J + 2; j++) {
            if (!vowel.includes(arr[i][j])) {
                check = false
            }
        }
    }
    return check
}

// let sampleBlock = [
//     ['A', 'I', 'B', 'S', 'D'],
//     ['U', 'E', 'C', 'T', 'Y'],
//     ['O', 'A', 'T', 'B', 'J']
// ]
// console.log(checkBlock(sampleBlock))

function isiVocal(arr) {
    let hitung = 0
    for (let e = 0; e < arr.length - 1; e++) {
        for (let f = 0; f < arr[e].length - 1; f++) {
            if (checkBlock(e, f, arr)) {
                hitung++
                console.log('Posisi index:', arr[e][f], e, f);
            }
        }
    }
    console.log('Total Vocal: ', hitung);

    return ''
}

let sampleBlock = [
    ['A', 'I', 'B', 'S', 'D'],
    ['U', 'E', 'C', 'T', 'Y'],
    ['O', 'A', 'T', 'B', 'J'],
    ['I', 'E', 'O', 'B', 'J']
]

isiVocal(sampleBlock)
isiVocal(generateBoard(5, 4));

