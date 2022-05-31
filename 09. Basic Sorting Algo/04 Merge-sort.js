// merge function works for 2 sorted array
// Bog O => n log(n)

function merge(arr1,arr2){
    let combination = [];
    let i = 0;
    let j = 0;

    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            combination.push(arr1[i]);
            i++;
        }else{
            combination.push(arr2[j]);
            j++;
        }
    }

    // remaine element
    while(i<arr1.length){
        combination.push(arr1[i]);
        i++;
    }

    // remaine element
    while(j<arr2.length){
        combination.push(arr2[j])
        j++;
    }

    return combination;
}


// mergeSort => divide array till one ele. for one array
function mergeSort(arr){

    // divide till one ele. in one array
    if(arr.length===1){
        return arr
    }

    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);    // left part 
    let right = arr.slice(mid);     // right part

    // divide and merge (in sorted manner)
    return merge(mergeSort(left),mergeSort(right));
}

console.log(mergeSort([2,1,4,3,8,5]));
