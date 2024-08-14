// Activity 4: Binary Tree

// Task 7:

class TreeNodes {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNodes(10);
root.left = new TreeNodes(5);
root.right = new TreeNodes(15);

root.left.left = new TreeNodes(3);
root.left.right = new TreeNodes(7);

root.right.left = new TreeNodes(12);
root.right.right = new TreeNodes(18);

console.log(root);
