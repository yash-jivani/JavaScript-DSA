var rotate = function(matrix) {
    for(let row=0;row<matrix.length;row++){
        for(let col=row;col<matrix[0].length;col++){
            let tmp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = tmp;
        }
    }
    
    for(let row of matrix){
        row.reverse()
    }

    return matrix
    
};

console.log([[1,2,3],[4,5,6],[7,8,9]])
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))