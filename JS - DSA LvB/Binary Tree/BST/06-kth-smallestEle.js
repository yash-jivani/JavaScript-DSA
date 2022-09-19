
/*
class Node
{
    constructor(x){
        this.data=x;
        this.left=null;
        this.right=null;
    }
}
*/

/**
 * @param {Node} root
 * @param {number} K
 * @return {number}
*/
class Solution {
    solve(root,ans){
        if(root===null){
            return;
        }
        this.solve(root.left,ans);
        ans.push(root.data);
        this.solve(root.right,ans);
    }
    KthSmallestElement(root, K) {
        let ans = [];
        this.solve(root,ans)
        // console.log(ans);
        if(ans[K-1]){
            return ans[K-1];
        }else{
            return  -1;
        }
    }
}