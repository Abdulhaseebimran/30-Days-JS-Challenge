// Task 8:

class TreeNodes {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNodes(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    // insert nodes helper
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
          if (node.left === null) {
            node.left = newNode;
          } else {
            this.insertNode(node.left, newNode);
          }
        } else {
          if (node.right === null) {
            node.right = newNode;
          } else {
            this.insertNode(node.right, newNode);
          }
        }
      }
    
      // Method to perform in-order traversal
      inOrderTraversal(node, result = []) {
        if (node !== null) {
          this.inOrderTraversal(node.left, result);
          result.push(node.value);
          this.inOrderTraversal(node.right, result);
        }
        return result;
      }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log(`In-Order Travseral: ${tree.inOrderTraversal(tree.root)}`);
