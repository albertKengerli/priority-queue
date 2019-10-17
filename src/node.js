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
      let grandParent = this.parent.parent;
      let oldParent = this.parent;
      let brother = new Node ();
      let [prevChildLeft, prevChildRight] = [this.left, this.right];
      
      switch (this){
        case this.parent.left:
          if (this.parent.right != null){
            brother = this.parent.right;
            brother.remove();
          }
          break;
        case this.parent.right:
          if (this.parent.left != null){
            brother = this.parent.left;
            brother.remove();
          }
          break;
      }
      this.remove();
      
      if (prevChildRight != null) {
        prevChildRight.remove();
        oldParent.appendChild(prevChildRight);
      }

      if (prevChildLeft != null) {
        prevChildLeft.remove();
        oldParent.appendChild(prevChildLeft);
      }      

      oldParent.remove();
      this.appendChild(oldParent);
      if (brother != null) this.appendChild(brother);
      
      if (grandParent != null) grandParent.appendChild(this);
    }
	}
}

module.exports = Node;
