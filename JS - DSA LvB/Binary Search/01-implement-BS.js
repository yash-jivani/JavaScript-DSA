// Time Complexity -> Big(log N)

function binarySearch(arr,key){
    let start = 0;
    let end = arr.length -1;
    let mid = Math.floor((start+end) / 2);
    while(start<=end){
        if(key===arr[mid]){
            return mid
        }
        else if(key<arr[mid]){
            // start = 0;
            end = mid-1;
        }else if(key>arr[mid]){
            start = mid+1;
            // end = arr.length-1;
        }
        mid = Math.floor((start+end) / 2);
    }
    return -1;
}

console.log(binarySearch([10,25,35,47,58,64,71,88],88))
console.log(binarySearch([10,25,35,47,58,64,71,88],25))
console.log(binarySearch([10,25,35,47,58,64,71,88],2))