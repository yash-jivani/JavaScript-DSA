function search(A,key){
    
    let start = 0;
    let end = A.length-1;
    let mid = Math.floor((start+end)/2);
    let startFrom = -1;
    while(start<end){
        if(A[mid]>=A[0]){
            start = mid + 1;
        }
        else{
            end = mid;
        }
        mid = Math.floor((start+end)/2);
        startFrom = end;
    }
    // console.log(startFrom)
    // console.log(A[A.length-1])
    // console.log(key>A[8])
    if(key>A[A.length-1]){
        start = 0;
        end = startFrom-1;
        mid = Math.floor((start+end)/2);
        while(start<=end){
            if(key===A[mid]){
                return 1;
            }
            else if(key<A[mid]){
                end = mid-1;
            }
            else if(key>A[mid]){
                start = mid+1;
            }
            mid = Math.floor((start+end)/2);
        }
        return -1;
    }
    else{
        start = startFrom;
        end = A.length-1;
        mid = Math.floor((start+end)/2);
        while(start<=end){
            if(key===A[mid]){
                return 1;
            }
            else if(key<A[mid]){
                end = mid-1;
            }
            else if(key>A[mid]){
                start = mid+1;
            }
            mid = Math.floor((start+end)/2)
        }
        return -1;
    }
}

console.log(search([5, 6, 7, 8, 9, 10, 1, 2, 3],2))
console.log(search([5, 6, 7, 8, 9, 10, 1, 2, 3],8))
console.log(search([5, 6, 7, 8, 9, 10, 1, 2, 3],11))
