//https://leetcode.com/problems/maximum-depth-of-binary-tree
import {BinarySearchTree, BinarySearchTreeNode} from "./helpers/BinarySearchTree";

function maxDepth(root: BinarySearchTreeNode | null | undefined): number {
    if(!root) return 0
    return 0;
}


// test
const bst = new BinarySearchTree({})
bst.insertArray([3, 9, 20, null, null, 15, 7])
console.log(maxDepth(bst.root));
