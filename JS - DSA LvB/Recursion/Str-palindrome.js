function isPalindrome(str,start,end){
    if(start>end){
        return true;
    }
    if(str[start]===str[end]){
        return isPalindrome(str,start+1,end-1);
    }
    if(str[start]!==str[end]){
        return false;
    }
}

let myStr = "yash"
let myStr2 = "bookkoob"
console.log(isPalindrome(myStr,0,myStr.length-1));
console.log(isPalindrome(myStr2,0,myStr2.length-1));

