let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

function colSum(arr){
    let colSum = [];
    for(let col=0;col<arr[0].length;col++){
        let sum = 0;
        for(let row=0;row<arr.length;row++){
            sum += arr[row][col]
        }
        colSum[col] = sum; 
    }
    return colSum;
}

console.log(colSum(arr))