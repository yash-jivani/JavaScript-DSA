/* 

leetcode 852 => peak index in mountain array

*/

var peakIndexInMountainArray = function(arr) {
    let start = 0
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2);
    while(start<end){
        if(arr[mid]<arr[mid+1]){
            start = mid+1
        }
        else{
            end = mid;
        }
        mid = Math.floor((start+end)/2);
    }
    return mid;
};