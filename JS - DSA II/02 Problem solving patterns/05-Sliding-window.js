/*

Sliding window : 
- this pattern involves creating a window which can either be an array or number from one position to another,
 Depending on a condition the window either inreases or closes,
 (and a new window is created) very useful for keeping track of a cubset of data in an array/string etc...

*/

// find Max SubArray Sum

// brute force solution | O(n^2)
function maxSubarraySum(arr,k){
    if(k>arr.length){
        return null;
    }
    let maxValue = -Infinity;
    for(let i=0;i<arr.length-k+1;i++){
        
        let temp = 0;
        // insider loop for calcu. k elements
        for(let j = 0;j<k;j++){
            temp += arr[i+j];       // add 0 to k num in i index
        }
        if(temp>maxValue){
            maxValue = temp;
        }
    }
    return maxValue;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5],2));
console.log(maxSubarraySum([1,2,5,2,8,1,5],4));
console.log(maxSubarraySum([4,2,1,6],1));
console.log(maxSubarraySum([4,2,1,6,2],4));
console.log(maxSubarraySum([],4));


// SLiding window solution | O(n)

function maxSubarraySum2(arr,k){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length<k){
        return null;
    }

    // creating window
    for(let i=0;i<k;i++){
        maxSum += arr[i];
    }

    // traverse window
    tempSum = maxSum;
    for(let i=k;i<arr.length;i++){
        tempSum = tempSum - arr[i-k]
        tempSum = tempSum + arr[i]
        if(tempSum>maxSum){
            maxSum = tempSum
        }
    }
    return maxSum;
}

console.log(maxSubarraySum2([1,2,5,2,8,1,5],2));
console.log(maxSubarraySum2([1,2,5,2,8,1,5],4));
console.log(maxSubarraySum2([4,2,1,6],1));
console.log(maxSubarraySum2([4,2,1,6,2],4));
console.log(maxSubarraySum2([],4));