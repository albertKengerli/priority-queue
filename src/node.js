class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left === null) {
      this.left = node;
      this.left.parent = this;
    } else if (this.right === null) {
      this.right = node;
      this.right.parent=this;
    } 
	}

	removeChild(node) {
    node.parent = null;
		switch (node){
			case this.left:
        this.left = null;
        break;
      case this.right:
        this.right = null;
        break;
      default:
        throw new Error ("Passed node is not a child of this node!");
		}
	}

	remove() {
    if (this.parent != null) {
      this.parent.removeChild(this);
    }
	}

	swapWithParent() {
		if (this.parent != null) {
      let prevParent = this.parent.parent;
      let [prevChildLeft, prevChildRight] = [this.left, this.right];
      [prevChildLeft.parent, prevChildRight.parent] = this.parent; 
    }
	}
}

let p = new Node(1,1);
let c = new Node (2,2);

p.appendChild(c);

console.log(p);
console.log(c);


c.swapWithParent();
console.log(p);
console.log(c);
module.exports = Node;
