// brute force solution | T.C. 
O(N)

function nextSmallerEle(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let minValue = -1;
    let flag = false;
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[j]<arr[i]){
            ans.push(arr[j]);
            flag = true;
            break;
        }
    }
    if(!flag){
        ans.push(minValue)
    }
    
  }
  return ans;
}

console.log(nextSmallerEle([2,1,4,3]))
