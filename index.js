
// const vowelsInMatrix = (mtx) => {
const vowelsInMatrix = (baris, kolom) => { 
    let alph = 'AAAABCDEEEEFGHIIIIJKLMNOOOOPQRSTUUUUVWXYZ'
    let vokal = 'AIUEO'
    let countMtx = 0
    let mtx = []
    for(let i = 0; i < baris; i++){
        let temp = []
        for(let j = 0; j < kolom; j++){
            temp.push(alph[Math.floor(Math.random() * 26)])
            // 26: maximize 'vokal' chances with originial amount of alphabets
        }
        mtx.push(temp)
    }   console.log(mtx)
    for (let i = 0; i < mtx.length-1; i++) {
        for (let k = 0; k < mtx[i].length-1; k++) {
            let cek = 0
            let kombinasi = [mtx[i][k], mtx[i][k+1], mtx[i+1][k], mtx[i+1][k+1]]//mtx2*2
            for (let m = 0; m < kombinasi.length; m++) {
                if (vokal.includes(kombinasi[m].toUpperCase())) cek++;
            }   if (cek === kombinasi.length) countMtx++;
        }        
    }   return `${countMtx} matrix 2x2 full of vocal alphabets`
}
console.log(vowelsInMatrix(5,3));
// var fake = [
//     ['A','i','B','S','D'],
//     ['U','E','C','T','Y'],
//     ['O','A','T','B','J']
// ]
// console.log(vowelsInMatrix(fake));


