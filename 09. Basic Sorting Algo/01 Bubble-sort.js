// function bubbleSort(arr){
//     for(let i = 0; i<arr.length ; i++){
//         for(let j = 0;j<arr.length; j++){
//             if(arr[j+1]<arr[j]){
//                 let tmp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = tmp;
//             }
//         }
//     }
// }

function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for(let j = 0; j<i; j++){
        if(arr[j]>arr[j+1]){
            let tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }
    }
  }
}

let arr2 = [1, 30, 42, 35, 2, 10];
bubbleSort(arr2);
console.log(arr2);
