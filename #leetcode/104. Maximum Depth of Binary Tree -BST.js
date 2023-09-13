"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://leetcode.com/problems/maximum-depth-of-binary-tree
const BinarySearchTree_1 = require("./helpers/BinarySearchTree");
function maxDepth(root) {
    if (root) {
        let leftMax = maxDepth(root.left);
        let rightMax = maxDepth(root.right);
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
bst.insertArray([3, 9, 20, null, null, 15, 7]);
// bst.insertArray([1,null,2])
console.log(maxDepth(bst.root));
