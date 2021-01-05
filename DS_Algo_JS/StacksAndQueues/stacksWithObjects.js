// STACK
// Abstract data type
// LIFO - Last in, first out
// Collection of elements with push and pop operations.

function Stack(capacity) {
    this._capacity = capacity || Infinity
    this._count = 0
    this._storage = {}
}

Stack.prototype.push = function(val) {
    if(this._count < this._capacity){
        this._storage[this._count++] = val
        return this._count
    }
    return "Max capacity reached. Please pop an element to proceed"
}

Stack.prototype.pop = function() {
    if (this._count === 0) {
        return "no element in stack. Add element before popping"
    }
    var item = this._storage[--this._count]
    delete this._storage[this._count]
    if (this._count < 0) {
        this._count = 0
    }
    return item
}

Stack.prototype.peek = function(){
    return this._storage[this._count-1]
}

Stack.prototype.count = function() {
    return this._count;
}

var myStack = new Stack(3);
console.log(myStack.push('a'), 'should be 1');
console.log(myStack.push('b'), 'should be 2');
console.log(myStack.push('c'), 'should be 3');
console.log(myStack.push('d'), 'should be Max capacity reached');
console.log(myStack.pop(), 'should be c');
console.log(myStack.count(), 'should be 2');
console.log(myStack.peek(), 'should be b');
console.log(myStack.count(), 'should be 2');