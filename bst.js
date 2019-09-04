class Node{
    constructor(val, left = null, right = null){
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BTS{
    constructor(){
        this.root = null;
    }
    add(val){
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let node = this.root;  
        while(true){
            if (node.val > val) {
                if(node.left){
                    node = node.left;
                }else{
                    node.left = newNode;
                    return;
                }
            }else{
                if (node.right) {
                    node = node.right;
                }else{
                    node.right = newNode;
                    return;
                }
            }
        }
    }
    getHeight(node = this.root){
        if(!node) return 0;
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right)); 
    }
    isBalanced(node = this.root){
        if(!node) return false;
        if(Math.abs(this.getHeight(node.left) - this.getHeight(node.right)) > 1) return false;
        return this.isBalanced(node.left) && this.isBalanced(node.right);
    }
}

const b = new BTS();
b.add(5);
b.add(4);
b.add(3);
b.add(8);
b.add(5);

console.log(b.root);
console.log(b.getHeight());
console.log(b.isBalanced());
