// // Percobaan 01
function checkVowel(row, col) {
    const vocals = 'AIUEO';
    const dict = 'BCDFGHJKLMNPQRSTVWXYZ';
    let counter = 0;
    let arr = [];
    for (let i = 0; i < row; i++) {
        let temp = [];
        for (let j = 0; j < col; j++) {
            let chance = Math.round(Math.random());
            if(chance === 1) {
                let random = Math.floor(Math.random()*vocals.length);
                temp.push(vocals[random])
            } else {
                let random = Math.floor(Math.random()*dict.length);
                temp.push(dict[random]);
            }
        }
        arr.push(temp);
    }
    console.log(arr);
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = 0; j < arr[i].length-1; j++) {
            let combination = [arr[i][j],arr[i][j+1],arr[i+1][j],arr[i+1][j+1]];
            console.log(combination);
            let temp = 0;
            for (let a = 0; a < combination.length; a++) {
                for (let b = 0; b < vocals.length; b++) {
                    if (combination[a] == vocals[b]) {
                        temp++
                    }
                }
            }
            if (temp == combination.length) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(checkVowel(5,4));




























// // Coba-coba

// function checkVowel(arr) {
//     const vocal = ['A','I','U','E','O'];
//     let counter = 0;
//     // Isi array untuk dicek
    

//     // Cek array yang isi vokal
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = 0; j < arr[i].length-1; j++) {
//             let combination = [arr[i][j],arr[i][j+1],arr[i+1][j],arr[i+1][j+1]];
//             console.log(combination);
//             let temp = 0;
//             for (let a = 0; a < combination.length; a++) {
//                 for (let b = 0; b < vocal.length; b++) {
//                     if (combination[a] == vocal[b]) {
//                         temp++
//                     }
//                 }
//             }
//             if (temp == 4) {
//                 counter++;
//             }
//         }
//     }
//     return counter;
// }

// const arr = [
//     ['A','X','C','Y'],
//     ['E','O','O','S'],
//     ['I','U','I','N'],
//     ['M','Y','O','E'],
//     ['P','D','A','I']
// ]
// console.log(checkVowel(arr))