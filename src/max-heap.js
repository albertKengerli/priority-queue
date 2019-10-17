const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
    return ((this.root === null) && (this.parentNodes === [])) ? true : false;
		
	}

	clear() {
    this.root = null;
    this.parentNodes = [];
	}

	insertNode(node) {
    if (this.root === null){
      this.root = node;
      this.parentNodes.push(node);
    } else {
      this.parentNodes[0].appendChild(node);
      if (this.parentNodes[0].right === node) this.parentNodes.shift();
      this.parentNodes.push(node);
    }
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
