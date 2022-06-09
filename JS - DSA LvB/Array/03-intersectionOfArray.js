
function NumberofElementsInIntersection(a, b, n, m) {
    // code here
        let setA = new Set(a);
        let setB = new Set(b);
        
        let count = 0;
        
        for(let i of setA){
            if(setB.has(i)){
                count++;
            }
        }
        return count;
}


