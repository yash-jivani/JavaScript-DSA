var spiralOrder = function(matrix) {
  
    let row = matrix.length;
    let col = matrix[0].length;
    let count = 0;
    let total = row*col;

    let starting_col = 0;
    let starting_row = 0;
    let ending_col = col-1;
    let ending_row = row-1;

    let spiralPattern = []
    while(count<total){

        // print starting row
            for(let i=starting_col ; (count<total) && i<=ending_col;i++){
                spiralPattern.push(matrix[starting_row][i]);
                count++;
            }
            starting_row++;     // after printing starting_row... >> starting_row index go downside => increase

        // print ending col.
        for(let i=starting_row;(count<total) && i<=ending_row;i++){
            spiralPattern.push(matrix[i][ending_col])
            count++;
        }
        ending_col--;      // after printing ending_col... >> ending_col index go leftside => decrease

        // print ending row.
        for(let i=ending_col;(count<total) && i>=starting_col;i--){
            spiralPattern.push(matrix[ending_row][i])
            count++;
        }
        ending_row--;    // after printing ending_row... >> ending_row index go upside => decrease

        // print starting col.
        for(let i=ending_row;(count<total) && i>=starting_row;i--){
            spiralPattern.push(matrix[i][starting_col]);
            count++;
        }
        starting_col++;      // after priting starting_col... >> starting_col index go rightside => increase
    }
    return spiralPattern;
};


console.log(spiralOrder([
    [1,2,3,4,5],
    [6,7,8,9,0],
    [11,12,13,14,15],
    [16,17,18,19,20]
]))