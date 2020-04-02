function checkVowels(numberOfRows, numberOfColumns){
    if(numberOfColumns < 2 || numberOfRows < 2){
        return 'Please input >= 2'
    }

    const vowelsDict = ['A','I','U','E','O']
    const consonantsDict = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']

    let box = []

    for(let i = 0; i < numberOfRows; i++){
        let subBox = []
        for(let j = 0; j < numberOfColumns; j++){
            let flag = Math.floor(Math.random() * Math.floor(2))
            if(flag === 0){
                subBox.push(vowelsDict[Math.floor(Math.random() * Math.floor(vowelsDict.length))])
            }else{
                subBox.push(consonantsDict[Math.floor(Math.random() * Math.floor(consonantsDict.length))])
            }
        }
        box.push(subBox)
    }

    let count = 0
    for(let i = 0; i < numberOfRows - 1; i++){
        for(let j = 0; j < numberOfColumns - 1; j++){
            let allAreVowels = false
            if(box[i][j] === 'A' || box[i][j] === 'I' || box[i][j] === 'U' || box[i][j] === 'E' || box[i][j] === 'O'){
                if(box[i+1][j] === 'A' || box[i+1][j] === 'I' || box[i+1][j] === 'U' || box[i+1][j] === 'E' || box[i+1][j] === 'O'){
                    if(box[i][j+1] === 'A' || box[i][j+1] === 'I' || box[i][j+1] === 'U' || box[i][j+1] === 'E' || box[i][j+1] === 'O'){
                        if(box[i+1][j+1] === 'A' || box[i+1][j+1] === 'I' || box[i+1][j+1] === 'U' || box[i+1][j+1] === 'E' || box[i+1][j+1] === 'O'){
                            allAreVowels = true
                        }
                    }
                }
            }
            if(allAreVowels){
                count++
            }
        }
    }
    console.log(box)
    return count
}

console.log(checkVowels(5,5))