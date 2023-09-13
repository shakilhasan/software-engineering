import {BinarySearchTree, BinarySearchTreeNode} from "./helpers/BinarySearchTree";

function invertTree(root: BinarySearchTreeNode | null | undefined): BinarySearchTreeNode | null | undefined {
    if (!root) return root;
    let temp = root.left;
    root.left = invertTree( root.right);
    root.right = invertTree(temp);
    return root;
}

// test
const bst = new BinarySearchTree({})
bst.insertArray([4, 2, 7, 1, 3, 6, 9])
console.log(invertTree(bst.root));
