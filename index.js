'use strict'

function generateBoard(col, row){
    let alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let board = []

    for(let i=0; i<row; i++){
        let temp = []
        for(let j=0; j<col; j++){
            let random = Math.floor(Math.random() * 25)
            temp.push(alfabet[random])
        }
        board.push(temp)
    }
    return board 
}

//console.log(generateBoard(4, 5))

function getBlock(arr){
    let countVocal = 0
    let vocal = ['A', 'I', 'U', 'E', 'O']
    for(let i=0; i<arr.length-1; i++){
        //console.log(arr[i], "ke", i)
        for(let j=0; j<arr[i].length-1; j++){
            //console.log(arr[i][j], "ke", j)
            let cek = []
            for(let k=i; k<i+2; k++){
                for(let l=j; l<j+2; l++){
                    let arrIJ = arr[k][l]
                    if(arrIJ === vocal[0] || arrIJ === vocal[1] || arrIJ === vocal[2] || arrIJ === vocal[3] || arrIJ === vocal[4]){
                        cek.push(true)
                    } else {
                        cek.push(false)
                    }
                }
            }

            let cek2 = true
            for(let m=0; m<cek.length; m++){
                if(cek[m] === false){
                    cek2 = false
                }
            }

            if(cek2 === true){
                countVocal++
            }
            
        }
    }
    console.log(arr)
    return countVocal
}
let arr1 = [
    ['A', 'X', 'C', 'Y'],
    ['E', 'O', 'O', 'S'],
    ['I', 'U', 'I', 'N'],
    ['M', 'Y', 'O', 'E'],
    ['P', 'D', 'A', 'I']
]
console.log(getBlock(arr1))

