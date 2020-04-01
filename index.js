// Fungsi untuk membuat sebuah generate random array
function createRandomArray(x,y){
  const huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // const huruf = 'AIUEOZXCV'
  let output = [];
  for(let i = 0; i < x; i++){
    output.push([]);
    for(let j = 0; j < y; j++){
      output[i].push(huruf[Math.ceil(Math.random()*huruf.length-1)])
    }
  }
  return output;
}

// Fungsi untuk mengecek apakah semua huruf yang masuk
// adalah huruf vokal
function checkVowels(str){ 
  const dataVocal = 'AIUEOaiueo';
  let counter = 0;
  for(let i = 0; i<str.length; i++){
      for(let j = 0; j<dataVocal.length; j++){
          if(dataVocal[j] == str[i]){
              counter++;
              break;
          }
      }
  }
  if(counter == 4){
      return 1
  }
  else{
      return 0
  } 
}

// Main Function
function checkVowelsInArray(arr){
  let output = 0;
  for(let i = 0; i < arr.length-1; i++){
    for(let j = 0; j < arr[i].length-1; j++){
      var temp = ''
      temp += arr[i][j]
      temp += arr[i][j+1]
      temp += arr[i+1][j]
      temp += arr[i+1][j+1]
      if(checkVowels(temp)){
        output++
      }
    }
  }
  return output;
}

// Test Drive With Fixed Array
console.log(checkVowelsInArray([
  ['A','I','c','y','e'],
  ['E','O','o','s','f'],
  ['i','u','i','n','f'],
  ['m','y','o','e','o'],
  ['p','d','a','i','a'],
  ['p','d','a','i','a']
]))

// Test Drive With Random Array
let testArray = createRandomArray(5,6);
console.log(testArray)
console.log(checkVowelsInArray(testArray)) 
