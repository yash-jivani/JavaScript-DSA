// Find pivot element

function findPivotIndex(arr){
    let start =0 ;
    let end = arr.length - 1;
    let mid = Math.floor((start+end)/2);
    while(start<end){

        if(arr[mid]>=arr[0]){   
            start = mid+1;
        }

        else{   // else if(arr[mid]<arr[0]) 
            end = mid;
        }

        mid = Math.floor((start+end)/2);
    }
    return end;
}

console.log(findPivotIndex([3,4,5,6,1,2]))
console.log(findPivotIndex([20,30,40,1,2,3,4,5,6,7]))


























