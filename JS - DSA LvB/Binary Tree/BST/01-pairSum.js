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
 * @param {number} target
 * @return {number} 
*/
class Solution {
    
    inOrder(root,inOrderArr){
        if(root===null){
            return ;
        }
        this.inOrder(root.left,inOrderArr)
        inOrderArr.push(root.data);
        this.inOrder(root.right,inOrderArr)
    }
    
  	isPairPresent(root,target){
  		//code here
  		let inOrderArr = [];
  		this.inOrder(root,inOrderArr);
  		let i=0;
  		let j=inOrderArr.length-1;
  		while(i<j){
  		    let sum = inOrderArr[i] + inOrderArr[j]
  		    if(sum===target){
  		        return 1;
  		    }
  		    if(sum > target){
  		        j--;
  		    }
  		    if(sum < target){
  		        i++;
  		    }
  		}
  		return 0;
  		
  	}
}

// approach 2 : optimize solution  


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
 * @param {number} target
 * @return {number} 
*/

class BSTiterator{
    myStack = [];
    reverse = true;
    
    constructor(root,isReverse){
        this.reverse  = isReverse;
        this.pushAll(root);
    }
    
    next(){
        let tmpNode = this.myStack[this.myStack.length-1];
        this.myStack.pop();
        if(this.reverse === false){
            this.pushAll(tmpNode.right);
        }else{
            this.pushAll(tmpNode.left);
        }
        return tmpNode.data;
    }
    
    pushAll(node){
        while(node!==null){
            this.myStack.push(node);
            if(this.reverse===true){
                node = node.right;
            }else{
                node = node.left;
            }
        }
    }
}
class Solution2 {
  	isPairPresent(root,target){
  		//code here
  		if(root === null){
  		    return  0;
  		}
  		let l = new BSTiterator(root,false);
  		let r = new BSTiterator(root,true);
  		
  		let i = l.next();
  		let j = r.next();
  		while(i<j){
  		    if(i+j === target){
  		        return 1;
  		    }else if((i+j) < target){
  		        i = l.next();
  		    }else{
  		        j = r.next();
  		    }
  		}
  		return 0;
  		
  	}
}