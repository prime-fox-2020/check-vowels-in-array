'use strict';

let row = 5; //input row disini
let col = 3; //input col disini

const createArray = (x, y) => {
    let range = 'AAAAAAAAAABCDEEEEEEEEEEFGHIIIIIIIIIIJKLMNOOOOOOOOOOPQRSUUUUUUUUUUVWXYZ';
    let arr = [];
    for (let i = 0; i < y; i++){
        let temp = [];
        for (let j = 0; j < x; j++){
            temp.push(range[Math.round(Math.random() * (range.length - 1))]);
        }
        arr.push(temp);
    }
    return arr;
}

const checkVowels = (arr) => {
    let obj = {
        A: 'avail',
        I: 'avail',
        U: 'avail',
        E: 'avail',
        O: 'avail'
    }
    let result = 0;
    let temp = [];
    for (let i = 0; i < arr.length - 1; i++){
        for (let j = 0; j < arr[i].length - 1; j++){
            let temp2 = [];
            if (obj[arr[i][j]] == 'avail'){
                if (obj[arr[i][j + 1]] == 'avail'
                && obj[arr[i + 1][j + 1]] == 'avail'
                && obj[arr[i + 1][j]] == 'avail'
                ) {
                    result ++;
                    temp2.push(arr[i][j], arr[i][j + 1], arr[i + 1][j + 1], arr[i + 1][j]);
                    temp.push(temp2);
                }
            }
        }
    }
    if (result == 0) console.log('tidak ada blok');
    else {
        if (result == 1) console.log(`Terdapat ${result} blok berisi : ${temp[0].join()}`);
        else {
            console.log(`Terdapat ${result} blok`);
            for (let i in temp){
                console.log(`Blok ${+i + 1} berisi : ${temp[i].join()}`);
            }
        }
    }
    return 
}

if (row < 2) console.log('Row minimal 2');
else if (row < 2) console.log('Col minimal 2');
else {
    console.log(`Jumlah row: ${row}, col: ${col}`);
    let arr = createArray(row, col);
    console.log(arr);
    checkVowels(arr);
}