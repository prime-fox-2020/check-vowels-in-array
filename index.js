function generateArr(row, col){
    let list1 = ['A', 'I', 'U', 'E', 'O', ];
    let list2 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

    let arr = [];
    for(let a = 0; a < row; a++){
        let temp = [];
        for(let b = 0; b < col; b++){
            let change = Math.floor(Math.random() * 11);
            if(change <= 6){ //atur changes nya
                temp.push(list1[Math.floor(Math.random() * list1.length)]);
            } else {
                temp.push(list2[Math.floor(Math.random() * list2.length)]);
            }
        }
        arr.push(temp);
    }
    return arr
}

function getVowels(arr){
    let list1 = ['A', 'I', 'U', 'E', 'O', ];
    let checker = 0
    let flag = true
    let getDown = 0
    while(flag === true && getDown < (arr.length - 1)){
        let valBox = []
        for(let b = 0; b < arr[0].length - 1; b++){
            let pusher = []
            pusher.push(arr[getDown][b])
            pusher.push(arr[getDown][b+1])
            valBox.push(pusher)
            pusher = []
            pusher.push(arr[getDown+1][b])
            pusher.push(arr[getDown+1][b+1])
            valBox.push(pusher)

            let flag2 = true
            let validate = 0
            for(let c = 0; c < valBox.length; c++){
                for(let d = 0; d < valBox[c].length; d++){
                    for(let e = 0; e < list1.length; e++){
                        if(valBox[c][d] === list1[e]){
                            validate++
                            break;
                        }
                    }
                }
            }

            if (validate === 4){
                checker++
                valBox = []
            } else {
                valBox = []
            }
        }
        getDown++
    }

    return checker
}



console.log(getVowels(generateArr(5, 4)))