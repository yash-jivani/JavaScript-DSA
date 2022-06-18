let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

console.log(arr)

for(let i of arr){
    console.log(i)
}

for(let i=0;i<arr.length;i++){ // arr.length => outer array | i => [1,2,3],[4,5,6]...
    for(let j=0;j<arr[i].length;j++){   // j => ele. of inner array | j => 1,2,3,4,5,6...
        process.stdout.write(`${arr[i][j]} `)
    }
    console.log()
}