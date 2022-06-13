/*

selection sort ::

    Time complexity : 
        Best case, Worst case = O(N^2)
    Space complexity = O(1)

    Use when : array size is small + space is less 

*/

function selectionSort(arr,n){

    for(let j = 0;j<n-1;j++){
        for(let k=j+1;k<n;k++){
            if(arr[j]>arr[k]){
                let temp = arr[j];
                arr[j] = arr[k];
                arr[k] = temp;
            }
        }
    }

    return arr
}

console.log(selectionSort([21,2,44,51,8,10],6))
console.log(selectionSort([21,2,4,5,8,11],6))
console.log(selectionSort([0,20,41,51,8,10],6))