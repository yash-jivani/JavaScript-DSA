// brute force | O(n logN)

function zeros1s2s(arr){
    arr.sort(function (a,b) {return a-b});
    return arr;
}

console.log(zeros1s2s([0,1,2,0,1,0,2,0,1]))

// dutch national flag solution 

function sort012(arr){
    //your code here
    let low = 0;
    let high = arr.length-1;
    let mid = low;
    
    while(mid<=high){
        if(arr[mid] === 1 ){
            mid++;
        }
        else if(arr[mid] === 2 ){
            let tmp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = tmp;
            high--;
        }
        else if(arr[mid]===0){
            let tmp = arr[mid];
            arr[mid] = arr[low];
            arr[low] = tmp;
            
            low++;
            mid++;
        }
    }
    return arr
}

console.log(sort012([0,1,2,0,1,0,2,0,1]))
