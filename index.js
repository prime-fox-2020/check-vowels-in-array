let getAlphabeth = () => {
    let num = Math.floor(Math.random()*26)

    var huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return huruf[num]
}
let checkVowels = (x) => {
    let vowels = ['A','I','U','E','O'], check
    for(let i=0;i<vowels.length;i++){
        if(x==vowels[i]) check=true 
    }
    return (check) ? true : false
}
let generateBoard = (row,column) => {
    let arr=[],temp=[]
    for (let i = 0; i < row; i++) {
        temp=[]
        for (let j = 0; j < column; j++) {
            temp.push(getAlphabeth())
        }
        arr.push(temp)
    }
    return arr
}
let checkBoard = (board) => {
    let count=0
    for (let i = 0; i < board.length-1; i++) {
        for (let j = 0; j < board[i].length-1; j++) {
            if(checkVowels(board[i][j])==true && checkVowels(board[i][j+1])==true && checkVowels(board[i+1][j])==true && checkVowels(board[i+1][j+1])==true ) count++
        }
        
    }
    return count
}
let main = (a,b) => {
    let board = generateBoard(a,b)
    // board = [
    //     ['A','I','C'],
    //     ['I','O','E'],
    //     ['B','U','A']
    // ]
    let total = checkBoard(board)

    return [board,total]
}

console.log(main(5,3))
