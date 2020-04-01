/*DENGAN 2 KAMUS */
function checkVowel(row, col){
    const vocals = ['A','I','U','E','O']
    const kons = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
    const randomArray = []

    for(let i = 0; i < row; i++){
        let temp = []
        for(let j = 0; j < col; j++){
            let random = Math.round(Math.random())
            let rng
            if(random === 0){
                rng = Math.floor(Math.random()*kons.length)
                temp.push(kons[rng])
            }
            else if(random === 1){
                rng = Math.floor(Math.random()*vocals.length)
                temp.push(vocals[rng])
            }
        }
        randomArray.push(temp)
    }
    let count = 0
    for(let i = 0; i < randomArray.length-1; i++){
        for(let j = 0; j < randomArray[i].length-1; j++){
            let subArray = [randomArray[i][j],randomArray[i][j+1],randomArray[i+1][j],randomArray[i+1][j+1]]

            if(subArray.every(str => vocals.includes(str))){
                count++
            }
        }
    }
    console.log(randomArray)
    return count
}
console.log(checkVowel(5,4))
/*---------------------------------------------------------------------------------------- */


/*DENGAN 1 KAMUS*/
// function checkVowel(row,col){
//     const vocals = ['A','I','U','E','O']
//     const dictionary = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     const length = dictionary.length
//     const arr = []
//     for(let i = 0; i < row; i++){
//         let temp = []
//         for(let j = 0; j < col; j++){
//             let random = Math.floor(Math.random()*length)
//             temp.push(dictionary[random])
//         }
//         arr.push(temp)
//     }
//     let count = 0

//     for(let i = 0; i < arr.length-1; i++){
//         for(let j = 0; j < arr[i].length-1; j++){
//             let subArray = [arr[i][j],arr[i][j+1],arr[i+1][j],arr[i+1][j+1]]

//             if(subArray.every(str => vocals.includes(str))){
//                 count++
//             }
//             // console.log(subArray)
//         }
        
//     }
//     return count
// }
// console.log(checkVowel(5,4))



/*---------------------------------------------------------------------------------------- */

/*HARDCODE*/

// function checkVowel(arr){
//     const vocals = ['A','I','U','E','O']
//     let count = 0

//     for(let i = 0; i < arr.length-1; i++){
//         for(let j = 0; j < arr[i].length-1; j++){
//             let subArray = [arr[i][j],arr[i][j+1],arr[i+1][j],arr[i+1][j+1]]

//             if(subArray.every(str => vocals.includes(str))){
//                 count++
//             }
//             // console.log(subArray)
//         }
        
//     }
//     return count
// }

// console.log(checkVowel([
//     ['A','I','B','S','D'],
//     ['U','E','C','T','Y'],
//     ['O','A','T','B','J']
// ])) // output : 2
