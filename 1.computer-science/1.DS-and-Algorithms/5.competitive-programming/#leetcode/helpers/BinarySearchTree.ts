export class BinarySearchTreeNode {
    left: BinarySearchTreeNode | null | undefined;
    right: BinarySearchTreeNode | null | undefined;
    val: number;

    constructor({val = 0, left = null, right = null}: {
        val?: number,
        left?: BinarySearchTreeNode | null | undefined,
        right?: BinarySearchTreeNode | null | undefined
    }) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export class BinarySearchTree {
    root: null | undefined | BinarySearchTreeNode

    constructor({root = null}) {
        this.root = root;
    }

    insertArray(arr: number[]) {
        arr.forEach((item) => {
            this.insert(item);
        });
    }

    insert(val: number) {
        this.root = this.insert_recursion(this.root, val);
    }

    insert_recursion(current: BinarySearchTreeNode | null | undefined, val: number) {
        if (!current) return new BinarySearchTreeNode({val});
        else if (val < current.val) current.left = this.insert_recursion(current.left, val);
        else if (val > current.val) current.right = this.insert_recursion(current.right, val);
        return current;
    }

    removeElement(val: number) {
        this.root = this.removeElement_recursion(this.root, val);
    }

    removeElement_recursion(current: BinarySearchTreeNode | null | undefined, val: number) {
        if (!current) return current;
        else if (val < current.val) current.left = this.removeElement_recursion(current.left, val);
        else if (val > current.val) current.right = this.removeElement_recursion(current.right, val);
        else if (current.left === null) return current.right;  //Case-1: if no left child ,right can be existed or not.
        else if (current.right === null) return current.left;  //Case-2: if no right child.
        else if (current.left && current.right) {              //Case-3: if both children exist.
            let leftMostParent = current, leftMost = current.right;
            while (leftMost && leftMost.left) {
                leftMostParent = leftMost;
                leftMost = leftMost.left;
            }

            if (leftMostParent === current) leftMostParent.right = leftMost.right;
            else leftMostParent.left = leftMost.right;
            current.val = leftMost.val;
            return current;
        }
        return current;
    }

    inorder() {
        this.inorder_recursion(this.root);
    }

    inorder_recursion(current: BinarySearchTreeNode | null | undefined) {
        if (current) {
            // console.log("-----", current.val);
            this.inorder_recursion(current?.left);
            // console.log("*******", current.val);
            console.log(current?.val);
            this.inorder_recursion(current?.right);
            // console.log("##########", current.val);
        }
    }

    preorder() {
        this.preorder_recursion(this.root);
    }

    preorder_recursion(current: BinarySearchTreeNode | null | undefined) {
        if (current) {
            console.log(current?.val);
            this.preorder_recursion(current?.left);
            this.preorder_recursion(current?.right);
        }
    }

    postorder() {
        this.postorder_recursion(this.root);
    }

    postorder_recursion(current: BinarySearchTreeNode | null | undefined) {
        if (current) {
            this.postorder_recursion(current?.left);
            this.postorder_recursion(current?.right);
            console.log(current?.val);
        }
    }

    maxDepth(): number {
        return this.maxDepth_recursion(this.root);
    }

    maxDepth_recursion(root: BinarySearchTreeNode | null | undefined): number {
        if (root) {
            let leftMax: any = this.maxDepth_recursion(root.left);
            let rightMax: any = this.maxDepth_recursion(root.right);
            if (leftMax > rightMax) return leftMax + 1;
            else return rightMax + 1;
        } else return 0;
    }

}

// let bst = new BinarySearchTree({})
// bst.insertArray([4, 3, 5]);   //for removeElement Case-1
// bst.insertArray([5, 8, 7, 9]); //for removeElementCase-1
// bst.insertArray([5, 3, 2, 1]); //for removeElementCase-2
// bst.insertArray([5, 2, 3, 1, 7, 6, 8]); //for removeElementCase-3

// console.log("---:", bst.root);
// bst.removeElement(5);
// console.log("------:", bst.root);

// bst.inorder();
// bst.preorder();
// bst.postorder();
// console.log("maxDepth : ",bst.maxDepth())
