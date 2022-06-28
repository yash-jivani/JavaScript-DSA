var missingNumber = function(nums) {
    let n = nums.length;
    let mySum = n*(n+1) / 2;
    let arrSum = 0;
    for(let i = 0;i<nums.length;i++){
        arrSum += nums[i];
    }
    
    return mySum-arrSum;
    
};

console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))