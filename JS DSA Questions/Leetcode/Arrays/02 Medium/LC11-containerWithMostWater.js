// brute force solution

var maxArea = function(height) {
    let maxArea = 0;
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){

            let minHeight = Math.min(height[i],height[j]);
            let area = minHeight * (j-i);
            maxArea = Math.max(maxArea, area )
        }
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));


// optimal solution

var maxArea2 = function(height) {
    let leftIndex = 0;
    let rightIndex = height.length-1;
    let maxArea = 0;

    while(leftIndex<rightIndex){
        let leftHeight = height[leftIndex];
        let rightHeight = height[rightIndex];

        let minHeight = Math.min(leftHeight,rightHeight);   // find min height among both pillars
        let currentArea = minHeight * (rightIndex-leftIndex);    // area formula
        maxArea = Math.max(maxArea,currentArea);       

        // Shift the pillar whose height is less
        // if left pillar height is less then -> go right side
        if(leftHeight<rightHeight){ 
            leftIndex++;
        }
        // if right pillar height is less then -> go left side
        else{
            rightIndex--;
        }
    }
    return maxArea;
};

console.log(maxArea2([1,8,6,2,5,4,8,3,7]));
console.log(maxArea2([1,1]));
console.log(maxArea2([2,3,4,5,18,17,6]));