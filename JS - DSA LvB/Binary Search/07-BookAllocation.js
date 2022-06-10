function isPossible(arr,mid,studentLimit){
    let student = 1;        // start with 1 student
    let pageSum = 0;        // init sum of page = 0

    // apply on whole array
    for(let i =0;i<arr.length;i++){
        // if pagesum + currntvalue of array is less thn Or Equal to mid...
        if(pageSum+arr[i]<=mid){
            // thn add 
            pageSum += arr[i];
        }
        // if pagesum + cuurentvalue of array if greater thn mid...
        else{
            
            student++;      // add new student
            // check student limit
            if(student>studentLimit || arr[i]>mid ){
                return false;
            }
            pageSum = arr[i]
        }
    }
    // if all ok thn...
    return true;
}

function findPages(a, n, m)
{
    
    //your code here
    let start = 0;
    let sum = 0;
    for(let i=0;i<n;i++){
        sum += a[i];
    }
    let end = sum;
    let mid = Math.floor((start+end)/2);
    let ans = -1;
    while(start<=end){
        // if possible thn we goto left side ('cause we need min.)
        if(isPossible(a,mid,m)){
            ans = mid;
            end = mid-1;
        }
        // else we go right side
        else{
            start = mid+1;
        }
        mid = Math.floor((start+end)/2)
    }
    return ans;
}

console.log(findPages([10,20,30,40,50],5,2))
console.log(findPages([12,34,67,90],4,2))
console.log(findPages([13, 31, 37, 45, 46, 54, 55, 63, 73, 84, 85],11,9))
console.log(findPages([5,17,100,110],4,4))