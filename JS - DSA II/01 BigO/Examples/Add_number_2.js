function addUpto(num){
    return num * (num+1)/2;
}

let t1 = performance.now();
addUpto(1000000000);
let t2 = performance.now();
console.log(`time : ${(t2-t1)/1000} sec`);