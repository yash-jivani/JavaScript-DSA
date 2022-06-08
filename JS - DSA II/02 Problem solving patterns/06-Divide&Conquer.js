/**

Divide and Conquer :
- This pattern involoves dividing a data set into samller chunks and then repeating a process with a subset of data.
  this pattern can tremendously devrease time complexity

  - Time complexity => O(logN)

  - there are many algo based on this pattern 
    > Binary search 
    > Sorting algo like quick sort, merge sort, etc...

 */




// example : search number 

// Normal method | find numerb in linear manner | O(n)

// with divide and conquer method | O(logN)
function search(arr,val){
    let min = 0;
    let max = arr.length - 1;
    while(min<=max){
        let middle = Math.floor((min+max)/2);
        let currentElement = arr[middle]

        if(arr[middle] < val){
            min = middle + 1;
        }
        else if(arr[middle]> val){
            max = middle -1;
        }
        else{
            return middle;
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5,6,7,8,9,10],5))
console.log(search([1,2,3,4,5,6,7,8,9,10],4))
console.log(search([1,2,3,4,5,6,7,8,9,10],6))
console.log(search([1,2,3,4,5,6,7,8,9,10],99))
