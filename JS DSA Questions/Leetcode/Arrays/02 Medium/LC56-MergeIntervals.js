var merge = function(intervals) {
    intervals.sort((a,b)=> a[0]-b[0])
    
    let results = [];
    results.push(intervals[0]);
    
    for(let i of intervals){
        let e1 = results[results.length-1][1];
        let s2 = i[0];
        let e2 = i[1];
        
        if(e1>=s2){
            results[results.length-1][1] = Math.max(e1,e2);
        }
        else{
            results.push(i)
        }
    }
    
    return results
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));