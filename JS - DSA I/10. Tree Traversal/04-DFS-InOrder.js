class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root===null){
            this.root = newNode;
            return this
        }
        // temp pointer points to root
        let temp = this.root;
        while(true){

            // * if given value is already exist in tree
            if(temp.value === newNode.value){
                console.log('---> Already exist in tree <---',newNode.value)
                return false;
            }
            // * if node value is less then current pointer value
            if(temp.value>newNode.value){
                // left-side
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;   // go left side
            }else{   // * if node value is less than current pointer value
                // right-side
                if(temp.right === null){   
                    temp.right = newNode;
                    return this
                }
                temp = temp.right;  // go right side
            }
        }
    }
    
    DFS_inOrder(){
        let currentNode = this.root;
        let results = [];
        inOrder(currentNode);
        
        function inOrder(currentNode){
            if(currentNode.left){
                inOrder(currentNode.left)
            }
            results.push(currentNode.value);
            if(currentNode.right){
                inOrder(currentNode.right)
            }
        }
        return results;
    } 
}

let myBST = new BST();
myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);
// console.log(myBST)

console.log(myBST.DFS_inOrder())
