let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

function waveArray(arr){
    let waveArr = [];
    for(let col=0;col<arr[0].length;col++){

        if(col&1){
            // if col. is odd thn bottom to top
            for(let row=arr.length-1;row>=0;row--){
                waveArr.push(arr[row][col])
            }
        }
        else{
            // if col. is even thn top to bottom
            for(let row=0;row<arr.length;row++){
                waveArr.push(arr[row][col]);
            }
        } 
    }
    return waveArr;
}


console.log(waveArray(arr))