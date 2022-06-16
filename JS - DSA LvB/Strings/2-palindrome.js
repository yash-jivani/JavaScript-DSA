// method 1: without creating extra space

function isPalindrome(S){
    
    let start = 0;
    let end = S.length-1;
    
    while(start<end){
        if(S[start] !== S[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome("yash"))
console.log(isPalindrome("mam"))

// method 2: create extra space

function isPalindrome2(S){

    let myArr = S.split("")
    myArr.reverse()
    let S2 = myArr.join("")
    return S===S2;
}


console.log(isPalindrome2("yash"))
console.log(isPalindrome2("mam"))
