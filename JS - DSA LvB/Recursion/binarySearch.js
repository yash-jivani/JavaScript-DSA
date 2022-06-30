function search(arr,start,end,target){

    if(start>end){
        return false;
    }

    let mid = Math.floor((start+end)/2)
    if(arr[mid]===target){
        return true;
    }
    else if(target<arr[mid]){
        return search(arr,start,mid-1,target);
    }else{
        return search(arr,mid+1,end,target);
    }
}

console.log(search([1,2,3,4,5,6,7],0,7,44))
console.log(search([1,2,3,4,5,6,7],0,7,4))
console.log(search([1,2,3,4,5,6,7],0,7,7))