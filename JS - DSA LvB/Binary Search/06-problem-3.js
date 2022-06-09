// Leetcode : find sqrt(x)

var mySqrt = function(x) {
    let start = 0;
    let end = x;
    let mid = Math.floor((start+end)/2);
    let ans = -1;
    while(start<=end){
        if(mid*mid===x){
            return mid;
        }
        else if(mid*mid<x){
            ans = mid; 
            start = mid+1;
        }
        else if(mid*mid>x){
            end = mid-1;
        }
        mid = Math.floor((start+end)/2);
    }
    return ans;
    
};