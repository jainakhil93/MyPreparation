//FIFO
// Implementing queue with objects

var Queue = function( capacity ) {
    this._storage = {}
    this._head = 0
    this._tail = 0
    this._capacity = capacity || Infinity

}

Queue.prototype.enqueue = function( value ) {
    if( this.count() < this._capacity) {
        this._storage[this._tail++] = value
        return this.count();
    }
    return "Max capacity reached. Remove element before adding."
}

Queue.prototype.dequeue = function() {
    if(this.count() === 0){
        return "Queue empty. Kindly add element in the queue."
    }
    var item = this._storage[this._head]
    delete this.storage[this._head]
    if( this._head < this._tail) {
        this._head++
    }
    return item
}

Queue.prototype.peek = function() {
    return this._storage[this._head]
}

Queue.prototype.count = function() {
    return this._tail - this._head
}