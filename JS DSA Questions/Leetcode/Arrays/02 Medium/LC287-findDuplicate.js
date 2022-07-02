var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;
    
    while(true){
        slow = nums[slow];
        fast = nums[nums[fast]];
        
        if(slow===fast){
            let  pointer = 0;
            
            while(pointer!==slow){
                pointer = nums[pointer];
                slow = nums[slow]
            }
            return pointer;
        }
    }   
};

console.log(findDuplicate([1,2,3,2]))
console.log(findDuplicate([3,1,3,4,2]))