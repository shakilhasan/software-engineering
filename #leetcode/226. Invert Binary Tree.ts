import {BinarySearchTree, BinarySearchTreeNode} from "./helpers/BinarySearchTree";

function invertTree(root: BinarySearchTreeNode | null | undefined): BinarySearchTreeNode | null | undefined {
    if (!root) return root;
    root.right = invertTree(root?.left);
    root.left = invertTree(root?.right);
    return root;
}

const bst = new BinarySearchTree({root: null})
bst.insertArray([4, 2, 7, 1, 3, 6, 9])
// bst.inorder()
const root = invertTree(bst.root);
console.log(root);
// console.log(bst.root);
