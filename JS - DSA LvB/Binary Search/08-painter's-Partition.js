
function isPossible(arr,mid,painterLimit){
    let mySum = 0;
    let painter = 1;
    for(let i=0;i<arr.length;i++){
        if(mySum+arr[i] <= mid){
            mySum+= arr[i];
        }
        else{
            painter++;
            if(painter>painterLimit || arr[i]>mid){ // if you don't understand 2nd condition take this array=> [5,5,5,5] and dry run it
                return false;
            }
            mySum = arr[i];
        }
    }
    return true;
}


function minTime(arr, n, k){
    // code here
    let start = 0;
    let end = 0;
    let sum = 0;
    let ans = -1;
    
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    end = sum;
    let mid = Math.floor((start+end)/2);
    // if we have only one painter
    if(k===1){
        return sum;
    }
    // if we have one ele. in array
    else if(n===1){
        return arr[0]
    }
    // else ....
    else{
        while(start<end){
            if(isPossible(arr,mid,k)){
                ans = mid
                end = mid;
            }
            else{
                start = mid+1;
            }
            mid = Math.floor((start+end)/2);
        }
        return ans;
    }
}


console.log(minTime([5,10,30,20,15],5,3))
console.log(minTime([10,20,30,40],4,2))
console.log(minTime([22,16,5,12],4,1))
console.log(minTime([5],1,2))
