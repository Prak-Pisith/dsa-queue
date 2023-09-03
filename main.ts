// Queue: FIFO data structure, Linear Data Structure
// for holding elements prior to processing
// Add: enqueue : Add an element to the tail
// Remove: dequeue : Remove an element from the head

class Queue<T> {

  private items: T[] = [];

  // Add an element to the end (tail) of the queue
  enqueue(item: T): void {
    this.items.push(item);
  }

  // Remove an element at the first (head) of the queue
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // 
  peek(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  display() {
    for (const item of this.items) {
      console.log(item);
    }
  }
}

const animalQueue = new Queue<string>();

animalQueue.enqueue('Lion');
animalQueue.enqueue('Tiger');
animalQueue.enqueue('Cat');

console.log(animalQueue.peek());

animalQueue.display();

console.log(`Dequeue : ${animalQueue.dequeue()}`);
console.log(`Dequeue : ${animalQueue.dequeue()}`);
console.log(`Dequeue : ${animalQueue.dequeue()}`);
console.log(`Dequeue : ${animalQueue.dequeue()}`);
