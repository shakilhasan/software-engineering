"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://leetcode.com/problems/diameter-of-binary-tree/
const BinarySearchTree_1 = require("./helpers/BinarySearchTree");
let diameter = 0;
function diameterOfBinaryTree(root) {
    diameterOfBinaryTree_recursion(root);
    return diameter;
}
function diameterOfBinaryTree_recursion(root) {
    if (root) {
        let leftMax = diameterOfBinaryTree_recursion(root.left);
        let rightMax = diameterOfBinaryTree_recursion(root.right);
        if (diameter < leftMax + rightMax)
            diameter = leftMax + rightMax;
        if (leftMax > rightMax)
            return leftMax + 1;
        else
            return rightMax + 1;
    }
    else
        return 0;
}
// test
const bst = new BinarySearchTree_1.BinarySearchTree({});
// bst.insertArray([1, 2, 3, 4, 5])
bst.insertArray([1, 2]);
console.log("diameterOfBinaryTree: ", diameterOfBinaryTree(bst.root));
