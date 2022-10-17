// without trie

class Solution {
    longestCommonPrefix(arr,n){ 
        //code here
        let ans = '';
        for(let i=0;i<arr[0].length;i++){
            let char = arr[0][i];
            let match = true;
            
            for(let j=1;j<n;j++){
                if(arr[j].length < i || char != arr[j][i]){
                    match = false;
                    break;
                }
            }
            
            if(match === false){
                break;
            }else{
                ans += char;
            }
        }
        if(ans.length === 0){
            return -1;
        }
        return ans;
    }
}

// with Trie

