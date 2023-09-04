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
        const { node, parent, type } = this.findElement(this.root, null, "", data);
        if (!node)
            return;
        const leftMost = this.findLeftMost(node == null || node === void 0 ? void 0 : node.right);
        if (leftMost) {
            leftMost.left = node.right;
            if (parent)
                if (type === "left")
                    parent.left = node.right;
                else
                    parent.right = node.right;
            else
                this.root = node.right;
        }
        else {
            if (parent)
                if (type === "left")
                    parent.left = node.left;
                else
                    parent.right = node.left;
            else
                this.root = node.left;
        }
    }
    findLeftMost(left) {
        if (!left)
            return left;
        else if (left.left == null)
            return left;
        else
            this.findLeftMost(left.left);
    }
    findElement(current, parent, type = "", data) {
        if (current && data < current.data) {
            this.findElement(current.left, current, "left", data);
        }
        else if (current && data > current.data) {
            this.findElement(current.right, current, "right", data);
        }
        else if (data === (current === null || current === void 0 ? void 0 : current.data)) {
            return { node: current, parent, type };
        }
        return {};
    }
    deleteNode(data) {
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
bst.removeElement(1);
console.log("------:", bst.root);
