const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
    this.maxSize = maxSize || 30;
    this.heap = new MaxHeap();
	}

	push(data, priority) {
    if (this.heap.length < this.maxSize) this.heap.push(data,priority)
    else throw new Error ("Maximum size of queue has already been reached!");
  }

	shift() {
    this.heap.pop();
	}

	size() {
    return this.heap.length;
	}

	isEmpty() {
    // console.log(this.heap.size());
    // console.log(this.heap.isEmpty());
		return (this.heap.isEmpty());
	}
}

module.exports = PriorityQueue;
