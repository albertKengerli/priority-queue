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

	shiftNodeUp(node){
    if (node.parent != null) {
      let nodeIndex = this.parentNodes.indexOf(node);
      let parentNodeIndex = this.parentNodes.indexOf(node.parent);

      if (nodeIndex !== -1) this.parentNodes.splice(nodeIndex, 1, node.parent);
      if (parentNodeIndex !== -1) this.parentNodes.splice(parentNodeIndex, 1, node);
      
      return this.shiftNodeUp(node.swapWithParent());
    } else {
      this.root = node;
    }
  }

	shiftNodeDown(node) {
		
	}
}

// h = new MaxHeap();
// h.insertNode(new Node(0, 10));
// h.insertNode(new Node(1, 5));
// h.insertNode(new Node(2, 7));
// h.insertNode(new Node(3, 20));

// h.shiftNodeUp(h.root.left.left);
// console.log(h.parentNodes);

module.exports = MaxHeap;
