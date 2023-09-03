// Queue: FIFO data structure, Linear Data Structure
// for holding elements prior to processing
// Add: enqueue : Add an element to the tail
// Remove: dequeue : Remove an element from the head
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    // Add an element to the end (tail) of the queue
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    // Remove an element at the first (head) of the queue
    Queue.prototype.dequeue = function () {
        return this.items.shift();
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.display = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    return Queue;
}());
var animalQueue = new Queue();
animalQueue.enqueue('Lion');
animalQueue.enqueue('Tiger');
animalQueue.enqueue('Cat');
animalQueue.display();
console.log("Dequeue : ".concat(animalQueue.dequeue()));
console.log("Dequeue : ".concat(animalQueue.dequeue()));
console.log("Dequeue : ".concat(animalQueue.dequeue()));
console.log("Dequeue : ".concat(animalQueue.dequeue()));
