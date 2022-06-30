function bubbleSort(arr,len){

    if(len===0 || len === 1){
        return ;
    }

    for(let i=0;i<len-1;i++){
        if(arr[i]>arr[i+1]){
            let tmp = arr[i];
            arr[i] =  arr[i+1];
            arr[i+1] =  tmp;
        }
    }

    bubbleSort(arr,len-1);
    
}   

let arr = [2,1,4,3,6,5]
let size = arr.length;
bubbleSort(arr,size);
console.log(arr)
