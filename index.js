'use strict'

function vowelsInArray(baris,kolom){
    const vocal = 'AIUEO';
    const konsonan ='BCDFGHJKLMNPQRSTVWXYZ';

    let data =[];
    //Buat Array Of Array (baris x kolom)
    for (let i = 0; i <baris; i++) {
        for (let j = 0; j < kolom; j++) {
            //Mendenifisikan Random untuk di Input di data
            let vocalRandom=vocal[Math.floor(Math.random()*vocal.length)]
            let konsonanRandom=konsonan[Math.floor(Math.random()*konsonan.length)]
            let dataRandom=[vocalRandom,konsonanRandom]

            //Input Data Random
            if(data[i]==undefined){
                data[i]=[];
                data[i].push(dataRandom[Math.floor(Math.random()*2)]);
            }else{
                data[i].push(dataRandom[Math.floor(Math.random()*2)]);
            }        
        }
    }
    // Cek di dalam data (array of array), Apakah ada vocal, jika iya di ganti dengan '*'
    let hasil =0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            for (let k = 0; k < vocal.length; k++) {
                if(vocal[k]==data[i][j]){
                    data[i][j] = '*'
                }
            }
        }
    }

    //definisikan apa yang di minta Soal, di tampung di hasil
    for (let i = 0; i < data.length-1; i++) {
        for (let j = 0; j < data[i].length-1; j++) {
            if(data[i][j]=='*' && data[i][j+1]=='*' && data[i+1][j]=='*' && data[i+1][j+1]=='*'){
                hasil ++
            }
        }
    }
    return 'ada '+hasil+' block'

}

console.log(vowelsInArray(5,4))
console.log(vowelsInArray(4,5))
console.log(vowelsInArray(5,1))