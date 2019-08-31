class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
        this.height = 1;
    }
    add(val) {
        if (val < this.val) {
            if (this.left) {
                this.left.add(val);
            }
            else {
                this.left = new Node(val);
            }
            if (!this.right || this.right.height < this.left.height) {
                this.height = this.left.height + 1;
            }
        } else {
            if (this.right) {
                this.right.add(val);
            } else {
                this.right = new Node(val);
            }
            if (!this.left || this.left.height < this.right.height) {
                this.height = this.right.height + 1;
            }
        }
        this.balance();
    }
    balance() {
        const rightHeight = (this.right) ? this.right.height : 0;
        const leftHeight = (this.left) ? this.left.height : 0;

        if (leftHeight > rightHeight + 1) {
            // identify if left heavy or right heavy
            const leftRightHeight = (this.left.right) ? this.left.right.height : 0;
            const leftLeftHeight = (this.left.left) ? this.left.left.height : 0;

            if (leftRightHeight > leftLeftHeight) {
                this.left.rotateRR();
            }
            this.rotateLL();
        } else if (rightHeight > leftHeight + 1) {
            const rightRightHeight = (this.right.right) ? this.right.right.height : 0;
            const rightLeftHeight = (this.right.left) ? this.right.left.height : 0;

            if (rightLeftHeight > rightRightHeight) {
                this.right.rotateLL();
            }

            this.rotateRR();
        }
    }
    rotateRR() {
        /**
         * swap the vals of nodes A and B
         * make node B the left child of node A
         * make node C the right child of node A
         * move node B's right child to its left child
         * make node A's _original_ left child the left child of node B
         * update the heights of all the nodes involved
         */
        const valBefore = this.val;
        const leftBefore = this.left;
        this.val = this.right.val;
        this.left = this.right;
        this.right = this.right.right;
        this.left.right = this.left.left;
        this.left.left = leftBefore;
        this.left.val = valBefore;
        this.left.updateInNewLocation();
        this.updateInNewLocation();
    }
    rotateLL() {
        const valBefore = this.val;
        const rightBefore = this.right;
        this.val = this.left.val;
        this.right = this.left;
        this.left = this.left.left;
        this.right.left = this.right.right;
        this.right.right = rightBefore;
        this.right.val = valBefore;
        this.right.updateInNewLocation();
        this.updateInNewLocation();
    }
    updateInNewLocation() {
        if (!this.right && !this.left) {
            this.height = 1;
        }
        else if (!this.right || (this.left && this.right.height < this.left.height)) {
            this.height = this.left.height + 1;
        }
        else {
            this.height = this.right.height + 1;
        }
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    add(val) {
        if (!this.root) {
            this.root = new Node(val);
            return;
        }
        this.root.add(val);
    }
}


const t =new Tree();
t.add(1);
t.add(2);
t.add(3);
t.add(4);
t.add(5);
t.add(6);
t.add(7);
t.add(8);
t.add(9);
t.add(10);
t.add(11);
t.add(12);
