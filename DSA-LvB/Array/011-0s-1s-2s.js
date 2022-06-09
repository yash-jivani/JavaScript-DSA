function zeros1s2s(arr){
    arr.sort(function (a,b) {return a-b});
    return arr;
}

// brute

console.log(zeros1s2s([0,1,2,0,1,0,2,0,1]))