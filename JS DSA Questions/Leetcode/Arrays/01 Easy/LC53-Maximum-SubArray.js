
// brute force 

function maxSubArray2(nums){
    let maxSum = -Infinity;
    for(let i=0;i<nums.length;i++){
        let currentSum = 0;
        for(let j=i;j<nums.length;j++){
            currentSum += nums[j]
            maxSum = Math.max(maxSum,currentSum);
        }
    }
    return maxSum;
}
console.log(maxSubArray2([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray2([-1]))
console.log(maxSubArray2([5,4,-1,7,8]))
console.log(maxSubArray2([1]))


// ? Kandane's Algo | optimal solution
var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSum = -Infinity;
    for(let i=0;i<nums.length;i++){
        currentSum = currentSum + nums[i];

        if(currentSum>maxSum){
            maxSum = currentSum;
        }
        if(currentSum < 0){
            currentSum = 0;
        }
    }
    return maxSum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-1]))
console.log(maxSubArray([5,4,-1,7,8]))
console.log(maxSubArray([1]))