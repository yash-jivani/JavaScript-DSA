// linear search

var findMin = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums[0]>nums[i]){
            return nums[i]
        }
        
    }
    return nums[0];
};

console.log(findMin([4,5,1,2,3]))
console.log(findMin([4,5,-2,1,2,3]))

// optimal (Binary search)

// pending...