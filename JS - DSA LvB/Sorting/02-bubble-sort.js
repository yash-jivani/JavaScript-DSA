/*

Bubble sort ::

    Time complexity : 
        Best case (after optimization) = O(N)  (if array is already sorted)
        Worst case = O(N^2)
    Space complexity = O(1)

*/

function bubbleSort(arr,n){

    // for optimization : (if array is already sorted)
    let swapped = false;

    // n-1 => ignore last comparison...
    for(let i=0;i<n-1;i++){
        // n-(i+1) => ith largest ele. already sort ho gya hoga...
        for(let j=0;j<n-(i+1);j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
                swapped=true;
            }
        }

        // if array sorted then swapped value will not change
        if(swapped===false){
            break;
        }
    }
    return arr;
}

console.log(bubbleSort([2,4,5,1,2,4,6],7))
console.log(bubbleSort([2,3,10,2,4,6],6))