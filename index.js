


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

    return data

}

console.log(vowelsInArray(5,4))
console.log(vowelsInArray(4,5))
console.log(vowelsInArray(5,3))