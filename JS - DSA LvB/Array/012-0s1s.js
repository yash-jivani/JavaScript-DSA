function segregate0and1(arr) {
  //code here
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        if(arr[left]===0){
            left++;
        }
        if(arr[right]===1){
            right--;
        }
        if(left<right){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;

        }

    }
    return arr;
}

console.log(segregate0and1([0,1,0,1,0,1,00,1,0]))