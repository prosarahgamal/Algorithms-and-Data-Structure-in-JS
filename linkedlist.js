class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.tail = this.head = null;
        this.length = 0;
    }
    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        this.length++;
    }
    pop() {
        return this.delete(this.length-1);
    }

    get(index) {
        if (index >= this.length) return null;
        return this._find(index, this._testIndex).val;
    }

    delete(index) {

        if (index === 0) {
            if (this.head) {
                const val = this.head.val;
                this.head = this.head.next || null;
                this.length--;
                return val;
            }
            return null;
        }

        if(index >= this.length) return null;

        const prev = this._find(index-1, this._testIndex);
        const val = prev.next.val;
        prev.next = prev.next.next || null;
        if (index === --this.length) {
            this.tail = prev;   
        }
        return val;
    }

    _find(val, test = this._test) {
        let current = this.head;
        let i = 0;
        while (current) {
            if (test(val, current.val, i, current)) {
                return current;
            }
            current = current.next;
            i++;
        }
        return null;
    }
    _test(a, b) {
        return a === b;
    }
    _testIndex(i, __, currentI) {
        return i === currentI;
    }
}

const l = new LinkedList();
l.push(14520);
l.push(145);
l.push(254);
console.log(l.pop());
console.log(l.head);
