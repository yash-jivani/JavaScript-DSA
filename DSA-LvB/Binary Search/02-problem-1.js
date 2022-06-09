/*

Find first and last occurence of given element in array

*/

function find(arr,x){
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2);
    let leftindex = -1;

    while(start<=end){
        if(x===arr[mid]){
            // first occurence | left side
            end = mid-1;
            leftindex = mid; 
        }
        else if(x<arr[mid]){
            end = mid-1;
        }
        else if(x>arr[mid]){
            start = mid+1;
        }
        mid = Math.floor((start+end)/2);
    }
    
    
    start = 0;
    end = arr.length-1;
    mid = Math.floor((start+end)/2);
    let rightindex = -1;
    while(start<=end){
        if(x===arr[mid]){
            // last occurence | right side
            start = mid+1;
            rightindex = mid;
        }
        else if(x<arr[mid]){
            end = mid-1;
        }
        else if(x>arr[mid]){
            start = mid + 1;
        }
        mid = Math.floor((start+end)/2);
    }

     
  return `${leftindex} ${rightindex}`;
}

console.log(find([1,2,3,3,3,3,4,5,6],3))






