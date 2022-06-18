let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

function search(arr,ele){
    for(let i=0;i<arr.length;i++){   // arr.length => outer array | i => [1,2,3],[4,5,6]...
        for(let j=0;j<arr[i].length;j++){   // j => ele. of inner array | j => 1,2,3,4,5,6...
            if(ele === arr[i][j]){
                return true
            }
        }
    }
    return false;
}

// for(let i=0;i<4;i++){
//     for(let j=0;j<3;j++){
//         process.stdout.write(`${arr[i][j]} `)
//     }
//     console.log()
// }

console.log(search(arr,55))
console.log(search(arr,5))