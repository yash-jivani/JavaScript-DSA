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
        let temp = this.root;
        while(true){

            if(temp.value === newNode.value){
                console.log('---> Already exist in tree <---',newNode.value)
                return false;
            }
            if(temp.value>newNode.value){
                // left-side
                if(temp.left === null){
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }else{
                // right-side
                if(temp.right === null){
                    temp.right = newNode;
                    return this
                }
                temp = temp.right;
            }
        }
    }

    contains(value){
        if(this.root===null){
            console.log('Tree not exist');
            return
        }
        let temp = this.root;
        while(temp!==null){     // null is ternimation for tree

            // * if value is less then current pointer value
            if(temp.value  > value){
                // left-side 
                temp = temp.left;
            }

            // * if value is greater then current pointer value
            else if(temp.value < value){
                // right side
                temp = temp.right;
            }
            // * if both conditions are faild
            else{      // temp.value === value
                return true;
            }
        }

        return false;   // if value not found !
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
// contains --
console.log(myBST.contains(555))