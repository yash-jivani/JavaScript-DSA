function thirdLargest(a, n)
{
    a.sort(function(a,b) {return a-b});
    console.log(a)
    if(a.length<3){
        return -1;
    }


    return a[a.length-3];
}

console.log(thirdLargest([1,2,3,4,6,7,8,9,10,5]))