"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://leetcode.com/problems/maximum-depth-of-binary-tree
const BinarySearchTree_1 = require("./helpers/BinarySearchTree");
function maxDepth(root) {
    if (!root)
        return 0;
    return 0;
}
// test
const bst = new BinarySearchTree_1.BinarySearchTree({});
bst.insertArray([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(bst.root));
