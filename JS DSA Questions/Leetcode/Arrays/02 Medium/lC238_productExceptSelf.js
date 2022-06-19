// brute force

var productExceptSelf = function(nums) {
    let len = nums.length;
    let ans = [];
    for(let i=0;i<len;i++){
        let product = 1;
        let startFrom = Math.floor((i+1)%len)
        for(let j=startFrom;j!==i;j=Math.floor((j+1)%len)){
            product *= nums[j];
        }
        ans[i] = product;
    }
    return ans;
};

console.log(productExceptSelf([1,2,3,4]))

// optimal solution

var productExceptSelf2 = function(nums) {
    let leftArr = new Array(nums.length).fill(0);
    let rightArr = new Array(nums.length).fill(0);
    let solutionArr = new Array(nums.length);

    // left side mutiply
    leftArr[0] = 1;
    for(let i=1;i<nums.length;i++){
        leftArr[i] = leftArr[i-1] * nums[i-1];
    }

    // right side multiply
    rightArr[rightArr.length-1] = 1;
    for(let i=nums.length-2;i>=0;i--){
        rightArr[i] = rightArr[i+1]*nums[i+1];
    }

    // final array
    for(let i=0;i<nums.length;i++){
        solutionArr[i] = leftArr[i]*rightArr[i];
    }
    return solutionArr;
};

console.log(productExceptSelf2([1,2,3,4]))