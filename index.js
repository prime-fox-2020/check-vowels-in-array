function checkVowels(numberOfRows, numberOfColumns){
    if(numberOfColumns < 2 || numberOfRows < 2){
        return 'Please input >= 2'
    }

    let vowelsDict = ['A','I','U','E','O']
    let consonantsDict = ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']

    let box = []

    for(let i = 0; i < numberOfRows; i++){
        let subBox = []
        for(let j = 0; j < numberOfColumns; j++){
            let flag = Math.floor(Math.random() * Math.floor(1))
            if(flag === 0){
                subBox.push(vowelsDict[Math.floor(Math.random() * Math.floor(vowelsDict.length - 1))])
            }else{
                subBox.push(consonantsDict[Math.floor(Math.random() * Math.floor(consonantsDict.length - 1))])
            }
        }
        box.push(subBox)
    }
    return box
}

console.log(checkVowels(2,2))