// https://leetcode.com/problems/maximum-depth-of-binary-tree
import {BinarySearchTree, BinarySearchTreeNode} from "./helpers/BinarySearchTree";

function maxDepth(root: BinarySearchTreeNode | null | undefined): number {
    if (root) {
        let leftMax: any = maxDepth(root.left);
        let rightMax: any = maxDepth(root.right);
        if (leftMax > rightMax) return leftMax + 1;
        else return rightMax + 1;
    } else return 0;
}

// test
const bst = new BinarySearchTree({})
bst.insertArray([3,9,20,null,null,15,7])
// bst.insertArray([1,null,2])
console.log(maxDepth(bst.root));
