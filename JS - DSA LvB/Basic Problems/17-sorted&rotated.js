var check = function(nums) {
    let count = 0;
    for(let i=0;i<nums.length;i++){
      if(nums[i-1] > nums[i] ){
          count++;
      }
      }
      if(nums[nums.length-1] > nums[0]){
          count++;
      }  
  
  
      if(count===1 || count === 0){
          return true;
      }else{
          return false;    
      }
      
};