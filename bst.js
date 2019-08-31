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
}

const b = new BTS();
b.add(5);
b.add(4);
b.add(3);
b.add(8);
b.add(5);

console.log(b.root);
