"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BinarySearchTree_1 = require("./helpers/BinarySearchTree");
function invertTree(root) {
    if (!root)
        return root;
    root.right = invertTree(root === null || root === void 0 ? void 0 : root.left);
    root.left = invertTree(root === null || root === void 0 ? void 0 : root.right);
    return root;
}
const bst = new BinarySearchTree_1.BinarySearchTree({ root: null });
bst.insertArray([4, 2, 7, 1, 3, 6, 9]);
// bst.inorder()
const root = invertTree(bst.root);
console.log(root);
// console.log(bst.root);
