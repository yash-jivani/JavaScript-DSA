function merge(nums1,n,nums2,m){
    let i = 0;
    let j = 0;
    let k=0;
    let arr3 = [];
    while(i<n && j<m){
      if(nums1[i] < nums2[j]){
        arr3[k] = nums1[i];
        k++;
        i++;
      }else{
        arr3[k] = nums2[j];
        k++;
        j++;
      }
    }
    
    while(i<n){
      arr3[k] = nums1[i];
      k++;
      i++;
    }
  
    while(j<m){
      arr3[k] = nums2[j];
      k++;
      j++;
    }
  
    return arr3;
  
  }
  
  console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))