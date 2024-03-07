// https://leetcode.com/problems/diameter-of-binary-tree/
import {BinarySearchTree, BinarySearchTreeNode} from "./helpers/BinarySearchTree";

let diameter: number = 0;

function diameterOfBinaryTree(root: BinarySearchTreeNode | null | undefined): number {
    diameterOfBinaryTree_recursion(root);
    return diameter;
}

function diameterOfBinaryTree_recursion(root: BinarySearchTreeNode | null | undefined) {
    if (root) {
        let leftMax: number = diameterOfBinaryTree_recursion(root.left);
        let rightMax: number = diameterOfBinaryTree_recursion(root.right);
        if (diameter < leftMax + rightMax + 1) diameter = leftMax + rightMax;
        console.log("diameterOfBinaryTree_recursion: ", leftMax, rightMax, diameter);
        if (leftMax > rightMax) return leftMax + 1;
        else return rightMax + 1;
    } else return 0;
}

// test
const bst = new BinarySearchTree({})
bst.insertArray([1, 2, 3, 4, 5])
// bst.insertArray([1, 2])
console.log("diameterOfBinaryTree: ", diameterOfBinaryTree(bst.root));
console.log("bst: ", bst.root);
