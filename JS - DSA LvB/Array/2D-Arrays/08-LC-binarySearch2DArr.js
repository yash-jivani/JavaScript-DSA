var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;

    let start = 0;
    let end = (row*col) - 1;
    let mid = Math.floor((start+end)/2);

    while(start<=end){

        // ager hum kisi bhi num. ko col(subarray ki size) se div. karenge to hme row index milega (Dry run OR LvB lec.23 t-1:15:10)
        let myRow = Math.floor(mid/col);
        // ager hum kisi bhi num. ko col(subarry ki size) se div. karenge to hme col index milega ((Dry run OR LvB lec.23 t-1:15:10)
        let myCol = Math.floor(mid%col);

        let element = matrix[myRow][myCol];

        if(element===target){
            return 1;
        }
        if(element>target){
            end = mid-1;
        }
        else if(element<target){
            start = mid+1;
        }
        mid = Math.floor((start+end)/2);

    }
    return 0;

};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3))