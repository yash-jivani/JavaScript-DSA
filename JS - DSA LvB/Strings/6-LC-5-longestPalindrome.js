// Longest Palindromic Substring

function longestPalindrome(s){
    let startFrom = 0;
    let endsWith = 1;  // bcoz we must have atleast one char

    function expandMiddle(left,right){

        // while left and right pointer's char are same
        while(left>=0 && right < s.length && s[left]===s[right]){
            // right - left + 1 => bcoz string index start form 0
            const currentPalindromeLength = right - left + 1;
            if(currentPalindromeLength > endsWith){
                endsWith = currentPalindromeLength;
                // bcoz now we have to start from most recent left pointer
                startFrom = left;
            }
            left--;
            right++;
        }
    }

    for(let i=0;i<s.length;i++){
        expandMiddle(i-1,i);    // for even case (abba)
        expandMiddle(i-1,i+1);  // for odd case (aba)
    }
    return s.slice(startFrom,startFrom+endsWith)
}

console.log(longestPalindrome("abbaav"))
console.log(longestPalindrome("axabo"))
console.log(longestPalindrome("a"))