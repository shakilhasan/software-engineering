"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinarySearchTree_1 = require("./helpers/BinarySearchTree");
function invertTree(root) {
    if (!root)
        return root;
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
}
// test
const bst = new BinarySearchTree_1.BinarySearchTree({});
bst.insertArray([4, 2, 7, 1, 3, 6, 9]);
console.log(invertTree(bst.root));
