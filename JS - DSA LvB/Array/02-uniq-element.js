let arr = [1,2,3,4,1,2,3];

function findUniq(arr){
    for(let i=0;i<arr.length;i++){
        for(let j = i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                break;
            }
            return arr[i]
            
        }
    }
}

console.log(findUniq(arr))

