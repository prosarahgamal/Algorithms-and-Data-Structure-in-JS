class ArrayList {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    push(item){
        this.data[this.length++] = item;
    }
    pop(){
        const val = this.data[--this.length];
        delete this.data[this.length];
        return val;
    }
    get(index){
        if (index >= this.length) return;
        return this.data[index];
    }
    delete(index){
        if (index >= this.length) return;
        const val = this.data[index];
        this._collapseTo(index);
        return val;
    }
    _collapseTo(index){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
    }
    print(){
        return this.data;
    }
}

const a = new ArrayList();
a.push(8);
a.push(9)
a.push(11)
a.push(12)
a.push(13)

console.log(a.pop());
console.log(a.delete(0));
console.log(a.get(0));
console.log(a.print());
