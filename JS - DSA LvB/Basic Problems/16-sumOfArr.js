// Sum of two numbers represented as arrays.

function findSum(a,b){
    //code here
    let i = a.length-1;
    let j = b.length-1;
    let ans = [];

    let carry = 0;
    while(i>=0 && j>=0){
        let sum = a[i] + b[j] + carry;
        carry = Math.floor(sum/10);
        let value = sum%10;
        ans.unshift(value)
        i--;
        j--;
    }

    while(i>=0){
        let sum = a[i] + carry;
        carry = Math.floor(sum/10);
        let value = sum %10;
        ans.unshift(value);
        i--;
    }

    while(j>=0){
        let sum = a[j] + carry;
        carry = Math.floor(sum/10);
        let value = sum%10;
        ans.unshift(value);
        j--;
    }

    while(carry !== 0){
        let sum = carry;
        // let value = sum % 10;
        ans.unshift(sum);
        carry = Math.floor(sum/10);
    }

    return ans;
}

console.log(findSum([2, 2, 7, 5, 3, 3],[4, 3, 3, 8]))
console.log(findSum([5,6,3],[8,4,2]))
