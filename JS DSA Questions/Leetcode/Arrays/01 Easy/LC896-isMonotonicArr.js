var isMonotonic = function(nums) {
    let same = nums[0] === nums[nums.length-1];
    let increase = nums[0] < nums[nums.length-1];
    let decrease = nums[0] > nums[nums.length-1];
    
    if(same){
        for(let i=0;i<nums.length-1;i++){
            if(nums[i]!==nums[i+1]){
                return false
            }
        
        }
        return true
    }
    
    else if(increase){
        for(let i=0;i<nums.length-1;i++){
            if(!(nums[i]<=nums[i+1])){
                return false;
            }
        }
        return true
    }
    else if(decrease){
        for(let i=0;i<nums.length-1;i++){
            if( !(nums[i]>=nums[i+1])){
                return false
            }
            
        }
        return true
    }
    
};

console.log(isMonotonic([1,2,2,3]))
console.log(isMonotonic([2,2,3,4]))
console.log(isMonotonic([2,2,2]))
console.log(isMonotonic([2,4,5,1]))