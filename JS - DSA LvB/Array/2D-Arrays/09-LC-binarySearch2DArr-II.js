var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;

    let currentRowIndex = 0;
    let currentColIndex = col-1;  // starting from top right of matrix

    // logic : LvB lec23, t-1:22:30
    while(currentRowIndex<row && currentColIndex>=0){
        let ele = matrix[currentRowIndex][currentColIndex];
        if(ele === target){
            return 1;
        }
        else if(ele<target){
            // if element is less thn target thn goto downside | row++
            currentRowIndex++;
        }
        else if(ele>target){
            // if element is greater thn target thn goto leftside | col--;
            currentColIndex--;
        }
    }
    return 0;
};

console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],5))
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],555))