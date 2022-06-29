var findMaxAverage = function(nums, k) {
    let winStart = 0;
    let max = -Infinity;
    let currentSum = 0;
    for(let winEnd = winStart;winEnd<nums.length;winEnd++){
        currentSum += nums[winEnd];
        if(winEnd - winStart===k-1){
            let avg = currentSum/k;
            max = Math.max(avg,max);
            currentSum = currentSum - nums[winStart];
            winStart++;
        }
    }   
    return max;
};

console.log(findMaxAverage([1,12,-5,-6,50,3],4))
console.log(findMaxAverage([1,5],1))
