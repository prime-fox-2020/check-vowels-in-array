function generateBoard(row, column){
  let dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = []
  for (let i = 0; i < column; i++){
    let temp = []
    for (let j = 0; j < row; j++){
      temp.push(dict[Math.floor(Math.random()*dict.length)])
    } 
    result.push(temp)
  }
  return result
}

//test-case
console.log(generateBoard(2, 3))
console.log(generateBoard(5, 4))

function checkVowels(letter){
    if (letter == "A" || letter == "I" || letter == "U" || letter == "E" || letter == "O"){
        return true
    }
    return false
}

//test-case
console.log(checkVowels("A"))
console.log(checkVowels("B"))

function checkVowelsInArray(array){
  let count = 0
  for (let i = 0; i < array.length-1; i++){
    for (let j = 0; j < array[i].length; j++){
      if (checkVowels(array[i][j]) === true && checkVowels(array[i][j+1]) === true && checkVowels(array[i+1][j]) === true && checkVowels(array[i+1][j+1]) === true){
        count++
      }
    }
  }
  return count   
}

//test-case
var x = [
    ['A', 'I', 'C'],
    ['I', 'E', 'I'],
    ['A', 'U', 'A'],
    ['O', 'E', 'B']
]
console.log(checkVowelsInArray(x))
console.log(checkVowelsInArray(generateBoard(5, 4)))