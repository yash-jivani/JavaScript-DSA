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
}

let myBST = new BST();
myBST.insert(5);
myBST.insert(6);
myBST.insert(65);
myBST.insert(65);
myBST.insert(4);
myBST.insert(3);
myBST.insert(1);
myBST.insert(1);
console.log(myBST)