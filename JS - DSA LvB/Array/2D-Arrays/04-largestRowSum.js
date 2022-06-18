let arr = [
    [1,2,3],
    [4,5,6],
    [10,11,12],
    [7,8,9]
];

function rowSum(arr){
    let rowSum = []
    let rowIndex=-1;
    let maxSum = -Infinity;
    for(let i=0;i<arr.length;i++){
        let sum = 0;
        for(let j=0;j<arr[i].length;j++){
            sum += arr[i][j];
        }
        if(sum>maxSum){
            maxSum = sum;
            rowIndex = i;
        }
    }
    return rowIndex;
}

console.log(`largest Row sum Index : ${rowSum(arr)}`)