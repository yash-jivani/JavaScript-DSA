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


// OR 

function merge2(arr1,n,arr2,m){
  let i=0;
  let j=0;
  var arr1_len = n
  var arr2_len = m

  let myArr = []
  while(arr1_len && arr2_len){
      if(arr1[i] <= arr2[j] ){
          myArr.push(arr1[i]);
          i++;
          arr1_len--;
      }
      else{
          myArr.push(arr2[j]);
          j++;
          arr2_len--;
      }
  }

  while(arr1_len){
      myArr.push(arr1[i]);
      i++;
      arr1_len--;
  }

  while(arr2_len){
      myArr.push(arr2[j]);
      j++;
      arr2_len--;
  }

  return myArr;    

}


console.log(merge2([1,2,3,0,0,0],3,[2,5,6],3))