let arr = [1,2,3,3,4,5,5];
for(let i=0;i<arr.length;i+=2){
    if(i+1<arr.length){

        if(arr[i] !== arr[i+1] ){
            let tmp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = tmp;
        }
    }
}
console.log(arr)

// ---- OR ----

let arr2 = [1,2,3,4,5,6,7,8];
for(let i=0;i<arr2.length-1;i+=2){
    // if(arr2[i+1]<arr2.length){
        if(arr2[i] !== arr2[i+1] ){
            let tmp = arr2[i];
            arr2[i] = arr2[i+1];
            arr2[i+1] = tmp;
        }
    // }
}    
console.log(arr2)
