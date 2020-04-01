'use strict';
function checkVowels(row, col){
  const cases = printBoard(row, col);
  const vowels = "AIUEO";
  let counter = 0;
  const check = []
  console.log(cases);
  for(let i = 0; i < row-1; i++){
    for(let j = 0; j < col-1; j++){
      if(vowels.indexOf(cases[i][j]) !== -1){
        const i1 = vowels.indexOf(cases[i][j+1]);
        const i2 = vowels.indexOf(cases[i+1][j]);
        const i3 = vowels.indexOf(cases[i+1][j+1]);
        if(i1 !== -1 && i2 !== -1 && i3 !== -1){
          counter++;
          check.push([[i],[j]])
        }
      }
    }
  }
  return counter;
}

function printBoard(row, col){
  const arr = [];
  for(let i = 0; i < row; i++){
    const temp = [];
    for(let j = 0; j < col; j++){
      temp.push(randomizeChar());
    }
    arr.push(temp);
  }
  return arr;
}

function randomizeChar(){
  const nonVowels = "BCDFGHJKLMNPQRSTVWXYZ";
  const vowels    = "AIUEO";
  if(Math.random()*8 > 5) return nonVowels[Math.floor(Math.random()* nonVowels.length)];
  else return vowels[Math.floor(Math.random()* vowels.length)]
}

console.log(checkVowels(5, 4));
console.log(checkVowels(3, 4));