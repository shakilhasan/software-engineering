"use strict";
class BinarySearchTreeNode {
    constructor({ data = 0, left = null, right = null }) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinarySearchTree {
    constructor({ root = null }) {
        this.root = root;
    }
    push(data) {
        let node = new BinarySearchTreeNode({ data });
        if (this.root === null)
            this.root = node;
        else {
            this.insertNode(this.root, node);
        }
    }
    insertNode(current, node) {
        if (node.data < current.data)
            if (current.left === null)
                current.left = node;
            else
                this.insertNode(current.left, node);
        else if (current.right === null)
            current.right = node;
        else
            this.insertNode(current.right, node);
    }
    removeElement(data) {
        const node = this.findElement(this.root, data);
        console.log("node-", node === null || node === void 0 ? void 0 : node.data);
        if (!node)
            return;
        if (node.left && node.right) {
            let leftMostParent = node;
            let leftMost = node.right;
            while (leftMost.left != null) {
                leftMostParent = leftMost;
                leftMost = leftMost.left;
            }
            if (leftMostParent === node)
                leftMostParent.right = leftMost.right;
            else
                leftMostParent.left = leftMost.right;
            node.data = leftMost.data;
        }
        return node;
    }
    findElement(current, data) {
        if (data === (current === null || current === void 0 ? void 0 : current.data))
            return current;
        else if ((current === null || current === void 0 ? void 0 : current.data) && data < current.data)
            return this.findElement(current.left, data);
        else if ((current === null || current === void 0 ? void 0 : current.data) && data > current.data)
            return this.findElement(current.right, data);
    }
}
let bst = new BinarySearchTree({});
bst.push(5);
bst.push(2);
bst.push(3);
bst.push(1);
bst.push(7);
bst.push(6);
bst.push(8);
console.log("---:", bst.root);
bst.removeElement(7);
console.log("------:", bst.root);
