// case Insensitive + ignore special char.s
// Palindrome Sentence

function isPalindrome(str){
    
    let start = 0;
    let end = str.length-1;
    
    while(start<end){

        if( (str[start].charCodeAt(0)>=65) && (str[start].charCodeAt(0)<=90) || (str[start].charCodeAt(0)>=97) && (str[start].charCodeAt(0)<=122) || ( (str[start].charCodeAt(0)>=48) && (str[start].charCodeAt(0)<=57) ) ){
            if( (str[end].charCodeAt(0)>=65) && (str[end].charCodeAt(0)<=90) || (str[end].charCodeAt(0)>=97) && (str[end].charCodeAt(0)<=122) || ( (str[end].charCodeAt(0)>=48) && (str[end].charCodeAt(0)<=57) ) ){

                if(str[start].toLowerCase()!==str[end].toLowerCase()){
                    return false
                }
                start++;
                end--;
            }
            else{
                end--;
            }
        }else{
            start++;
        }

    }
    return true;
}

console.log(isPalindrome("c1 O$d@eEdo1 C"))
console.log(isPalindrome("yash"))
console.log(isPalindrome("ma #m  m"))
console.log(isPalindrome("ma #  m"))
console.log(isPalindrome("race car."))
console.log(isPalindrome('0pp'))

// method 2 : 


function isPalindrome(str){
    
    let s = str.toLowerCase().replace(/[\W_]/g,"");
    let start = 0; 
    let end  = s.length-1;
    
    while(start<end){
        if(s[start]!==s[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log("---")
console.log(isPalindrome("c1 O$d@eEdo1 C"))
console.log(isPalindrome("yash"))
console.log(isPalindrome("ma #m  m"))
console.log(isPalindrome("ma #  m"))
console.log(isPalindrome("race car."))
console.log(isPalindrome('0pp'))