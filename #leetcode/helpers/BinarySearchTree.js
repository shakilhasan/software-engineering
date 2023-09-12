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
        if (!current)
            return current;
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
        this.deleteNode(this.root, data);
    }
    deleteNode(current, data) {
        if (!current)
            return current;
        else if (data < (current === null || current === void 0 ? void 0 : current.data)) {
            current.left = this.deleteNode(current.left, data);
            return current;
        }
        else if (data > (current === null || current === void 0 ? void 0 : current.data)) {
            current.right = this.deleteNode(current.right, data);
            return current;
        }
        else {
            if (current.left === null)
                return current.right;
            else if (current.right === null)
                return current.left;
            else if (current.left && current.right) {
                let leftMostParent = current;
                let leftMost = current.right;
                while (leftMost && leftMost.left !== null) {
                    leftMostParent = leftMost;
                    leftMost = leftMost.left;
                }
                if (leftMostParent === current)
                    leftMostParent.right = leftMost === null || leftMost === void 0 ? void 0 : leftMost.right;
                else
                    leftMostParent.left = leftMost === null || leftMost === void 0 ? void 0 : leftMost.right;
                current.data = leftMost === null || leftMost === void 0 ? void 0 : leftMost.data;
                return current;
            }
        }
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
bst.removeElement(5);
console.log("------:", bst.root);
