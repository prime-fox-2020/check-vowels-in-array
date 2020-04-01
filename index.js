function vowelChecker(row, col) {
    let vokal = ['A', 'I', 'U', 'E', 'O']
    let nonVokal = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
        let arrayAcak = []
    for (i = 0; i < row; i++) {
        let temp = []
        for (j = 0; j < col; j++) {
            //penentuan vokal atau nonvokal
            let acak = Math.trunc(Math.random() * 10)
            if (acak % 2 === 0) {
                let acakHuruf = Math.floor(Math.random() * nonVokal.length)
                temp.push(nonVokal[acakHuruf])
            } else {
                let acakHuruf = Math.floor(Math.random() * vokal.length)
                temp.push(vokal[acakHuruf])
            }
        }
        //push ke array
        arrayAcak.push(temp)
    }
    //check
    let counter = 0
    for(let k=0; k<arrayAcak.length-1; k++){
        for(let l=0; l<arrayAcak[k].length-1; l++){
            let miniCounter = 0
            //check 2x2
            let checker = [arrayAcak[k][l], arrayAcak[k][l+1], arrayAcak[k+1][l], arrayAcak[k+1][l+1]]
            for(let m=0; m<checker.length; m++){
                for(let n=0; n<vokal.length; n++){
                    if(checker[m] === vokal[n]){
                        miniCounter++
                    }
                }
            }
            // console.log(checker)
            if(miniCounter === 4){
                counter++
            }
        }
    }
    console.log(arrayAcak)
    return counter
}


    


console.log(vowelChecker(5,4))