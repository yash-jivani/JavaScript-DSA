

//Function to return a list containing the union of the two arrays. 
function findUnion(arr1, arr2)
{
    //your code here
    
        //your code here
        let NewArray = [...arr1,...arr2];
        let finl = new Set(NewArray)
        return (new Array(...finl).sort(function(a, b){return a - b}));
        
    
}

console.log(findUnion([1,20,3],[40,20,5]));
