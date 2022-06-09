function kthSmallest(arr,k){
    //code here
    arr.sort(function (a,b) {return a-b})
    return arr[k-1];
}

console.log(kthSmallest([10,20,30,40,50,70,1,12,25,45],3));