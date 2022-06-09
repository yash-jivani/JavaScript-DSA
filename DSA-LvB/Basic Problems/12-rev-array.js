let arr = [1,2,3,4];
let start = 0;
let end = arr.length-1;

while(start<=end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
}

for(let i=0;i<arr.length;i++){
    process.stdout.write(`${arr[i]} `)
}