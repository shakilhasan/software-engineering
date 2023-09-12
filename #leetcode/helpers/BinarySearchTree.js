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
    insertArray(arr) {
        arr.forEach((item) => {
            this.insert(item);
        });
    }
    insert(data) {
        this.root = this.insert_recursion(this.root, data);
    }
    insert_recursion(current, data) {
        if (!current)
            return new BinarySearchTreeNode({ data });
        else if (data < current.data)
            current.left = this.insert_recursion(current.left, data);
        else if (data > current.data)
            current.right = this.insert_recursion(current.right, data);
        return current;
    }
    removeElement(data) {
        this.root = this.removeElement_recursion(this.root, data);
    }
    removeElement_recursion(current, data) {
        if (!current)
            return current;
        else if (data < (current === null || current === void 0 ? void 0 : current.data))
            current.left = this.removeElement_recursion(current.left, data);
        else if (data > (current === null || current === void 0 ? void 0 : current.data))
            current.right = this.removeElement_recursion(current.right, data);
        else if (current.left === null)
            return current.right; //Case-1: if no left child ,right can be existed or not.
        else if (current.right === null)
            return current.left; //Case-2: if no right child.
        else if (current.left && current.right) { //Case-3: if both children exist.
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
        return current;
    }
    inorder() {
        this.inorder_recursion(this.root);
    }
    inorder_recursion(current) {
        if (current) {
            // console.log("-----", current.data);
            this.inorder_recursion(current === null || current === void 0 ? void 0 : current.left);
            // console.log("*******", current.data);
            console.log(current === null || current === void 0 ? void 0 : current.data);
            this.inorder_recursion(current === null || current === void 0 ? void 0 : current.right);
            // console.log("##########", current.data);
        }
    }
    preorder() {
        this.preorder_recursion(this.root);
    }
    preorder_recursion(current) {
        if (current) {
            console.log(current === null || current === void 0 ? void 0 : current.data);
            this.preorder_recursion(current === null || current === void 0 ? void 0 : current.left);
            this.preorder_recursion(current === null || current === void 0 ? void 0 : current.right);
        }
    }
    postorder() {
        this.postorder_recursion(this.root);
    }
    postorder_recursion(current) {
        if (current) {
            this.postorder_recursion(current === null || current === void 0 ? void 0 : current.left);
            this.postorder_recursion(current === null || current === void 0 ? void 0 : current.right);
            console.log(current === null || current === void 0 ? void 0 : current.data);
        }
    }
}
let bst = new BinarySearchTree({});
// bst.insertArray([4, 3, 5]);   //Case-1
// bst.insertArray([5, 8, 7, 9]); //Case-1
// bst.insertArray([5, 3, 2, 1]); //Case-2
bst.insertArray([5, 2, 3, 1, 7, 6, 8]); //Case-3
console.log("---:", bst.root);
// bst.removeElement(5);
console.log("------:", bst.root);
// bst.inorder();
// bst.preorder();
bst.postorder();
