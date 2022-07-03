// sorted Arr. algo | O(log N)


// method 1:
function binarySearch(arr,target){
    let start  =0 ;
    let end = arr.length-1;

    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            return true;
        }
        else if(arr[mid] < target){
            start = mid+1;
        }
        else if(arr[mid]>target){
            end = mid-1;
        }
    }
    return false;
}

// method 2: 
function binarySearch2(arr,target){
    let start  =0 ;
    let end = arr.length-1;

    let mid = Math.floor((start+end)/2);
    while(start<= end && arr[mid]!==target ){
        
        if(arr[mid] < target){
            start = mid+1;
        }
        else if(arr[mid]>target){
            end = mid-1;
        }
        mid = Math.floor((start+end)/2);
    }
    return arr[mid]===target ? true: false;
}

console.log(binarySearch([34,51,1,2,3,45,56,687], 100))
console.log(binarySearch([34,51,1,2,3,45,56,687], 56))
console.log(binarySearch2([34,51,1,2,3,45,56,687], 100))
console.log(binarySearch2([34,51,1,2,3,45,56,687], 56))