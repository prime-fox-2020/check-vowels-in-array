function checkVowels(row, column) {
  const vocal = 'AIUEO'
  const konsonan = 'BCDFGHJKLMNPQRSTVWXYZ'

  let array = []
  for (let i = 0; i < column; i++) {
    let temp = []
    for (let j = 0; j < row; j++) {
      if (Math.round(Math.random()) === 1){
        temp.push(vocal[Math.round(Math.random() * 4)])
      } else {
        temp.push(konsonan[Math.round(Math.random() * 20)])
      }
    }
    array.push(temp)
  }
  console.log(array);

  let result = 0
  for (let a = 0; a < array.length -1; a++) {
    for (let b = 0; b < array[a].length -1; b++) {
      let box = [array[a][b], array[a][b+1], array[a+1][b], array[a+1][b+1]]
      // console.log(box);
      
      let counter = 0
      for (let i = 0; i < box.length; i++) {
        for (let j = 0; j < vocal.length; j++) {
          if (box[i] === vocal[j]){
            counter ++
            // console.log(counter);
          }
        }
      }
      if (counter === box.length){
        result ++
      }
    }
  }
  return result
}


console.log(checkVowels(5, 4))