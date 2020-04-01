const mati = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
const vokal = ['A','I','U','E','O']

function cariBlock(row,col){
    var res=[]
    for (let i = 0; i < row; i++) {
        var arr=[]
        for (let j = 0; j < col; j++) {
            let random=Math.round(Math.random())
            let acak
            if(random==0){
               acak=Math.floor(Math.random()*vokal.length) 
               arr.push(vokal[acak])
            }else {
                acak=Math.floor(Math.random()*mati.length) 
                arr.push(mati[acak])
            }
        }
        res.push(arr)
    }
    console.log(res)
    var check=0
    var count=0
    for (var i = 0; i < res.length-1; i++) {
        for (var j = 0; j < res[i].length-1; j++) {
        count=0
        let target=[res[i][j],res[i][j+1],res[i+1][j],res[i+1][j+1]]
        for (let k = 0; k < target.length; k++) {
            for (let l = 0; l < vokal.length; l++) {
                if(target[k]==vokal[l]){
                     count++
                     break
                }
            }
            if(count==4){
                break
            }
         }
         if(count==4){
             break
         }
     }
     if(count==4){
         check++
     }
 }
 return check 
}
console.log(cariBlock(5,4))