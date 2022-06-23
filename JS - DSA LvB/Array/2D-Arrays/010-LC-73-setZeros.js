var setZeroes = function(matrix) {
    
    let myRow = [];
    let myCol = [];
    
    // store row,col index in myRow,myCol where 0 is found
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j]===0){
                myRow.push(i);
                myCol.push(j);
            }
        }
    }

    // console.log(myRow)
    // console.log(myCol)

    // modify matrix
    for(let i=0;i<matrix.length;i++){   // for row
        // check whether ith row is in myRow
        for(let k=0;k<myRow.length;k++){    
            // if ith index is in myRow
            if(myRow[k]===i){
                // thn set all zeros in ith row
                for(let j=0;j<matrix[0].length;j++){
                    matrix[i][j]=0
                }
            }
        }

        for(let j=0;j<matrix[0].length;j++){    // for col
            // check whether jth col is in myCol
            for(let k=0;k<myCol.length;k++){
                // if jth col is in myCol thn set that jth col as 0.
                if(myCol[k]===j){
                    matrix[i][j]=0
                }
            }
        }
    }
    return matrix
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
console.log(setZeroes([[1,0,2,0],[3,4,5,2],[0,3,1,5]]))
