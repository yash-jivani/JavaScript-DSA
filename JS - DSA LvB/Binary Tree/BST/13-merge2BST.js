/**
 * @param {Node} root1
 * @param {Node} root2
 * @returns {number[]}
*/



class Solution
{
    merge2Array(arr1,arr2){
        let i = 0;
        let j = 0;
        let finalArr = []
        while(i<arr1.length && j<arr2.length){
            if(arr1[i] < arr2[j]){
                finalArr.push(arr1[i]);
                i++;
            }else{
                finalArr.push(arr2[j]);
                j++;
            }
        }
        
        while(i<arr1.length){
            finalArr.push(arr1[i]);
            i++;
        }
        while(j<arr2.length){
            finalArr.push(arr2[j]);
            j++;
        }
        
        return  finalArr;
    }
    
    inOrder(root,list){
        if(root===null){
            return null;
        }
        
        this.inOrder(root.left,list);
        list.push(root.data);
        this.inOrder(root.right,list);
    }
    
    inOrderTOBST(start,end,list){
        if(start>end){
            return  null;
        }
        
        let mid = Math.floor((start+end)/2);
        let node = new Node(list[mid]);
        node.left = this.inOrderTOBST(start,mid-1,list);
        node.right = this.inOrderTOBST(mid+1,end,list);
        return node;
    }
    
    //Function to return a list of integers denoting the node 
    //values of both the BST in a sorted order.
    merge(root1, root2)
    {
        //your code here
        let one = [];
        let two = [];
        this.inOrder(root1,one);
        this.inOrder(root2,two);
        
        let finalBSTArr = this.merge2Array(one,two);
        // return this.inOrderTOBST(0,finalBSTArr.length-1,finalBSTArr)
        return finalBSTArr;
    }
}