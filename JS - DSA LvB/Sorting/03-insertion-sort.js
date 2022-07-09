/*

insertion sort ::

    Time complexity : 
        Best case = O(N)  (if array is already sorted)
        Worst case = O(N^2)
    Space complexity = O(1)

    Why intsertion sort : adaptive soring algo.

    example : 

     j i    (i=1,j=i-1)
    [3,2,4,1]

*/


// with for loop
function insertionSort(arr,n){
    for(let i=1;i<n;i++){
        let temp = arr[i]
        let j = i-1;
        for(;j>=0;j--){
            if(temp<arr[j]){
                // shift
                arr[j+1] = arr[j];
            }
            else{
                break;
            }
        }
        arr[j+1] = temp;  
    }
    return arr;
}
console.log(insertionSort([24,18,38,43,14,40,1,54],8))

// with while loop
function insersionsort2(arr,n){
    for(let i=1;i<n;i++){
        let valueOFi = arr[i];
        let j = i-1;
        while((valueOFi < arr[j]) && (j>-1)){
            // shift
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = valueOFi;
    }
    return arr
}

console.log(insersionsort2([24,18,38,43,14,40,1,54],8));
