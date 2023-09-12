class BinarySearchTreeNode {
    left: BinarySearchTreeNode | null | undefined;
    right: BinarySearchTreeNode | null | undefined;
    data: any;

    constructor({data = 0, left = null, right = null}) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree {
    root: BinarySearchTreeNode | null

    constructor({root = null}) {
        this.root = root;
    }

    push(data: any) {
        let node = new BinarySearchTreeNode({data})
        if (this.root === null) this.root = node
        else {
            this.insertNode(this.root, node)
        }
    }

    insertNode(current: BinarySearchTreeNode | null | undefined, node: BinarySearchTreeNode) { // helper
        if (!current) return current;
        if (node.data < current.data)
            if (current.left === null) current.left = node
            else this.insertNode(current.left, node)
        else if (current.right === null) current.right = node
        else this.insertNode(current.right, node)
    }

    removeElement(data: any) {
        this.removeElement_recursion(this.root, data);
    }

    removeElement_recursion(current: BinarySearchTreeNode | null | undefined, data: any) {
        if (!current) return current;
        else if (data < current?.data) {
            current.left = this.removeElement_recursion(current.left, data);
            return current;
        } else if (data > current?.data) {
            current.right = this.removeElement_recursion(current.right, data);
            return current;
        } else {
            if (current.left === null) return current.right;
            else if (current.right === null) return current.left;
            else if (current.left && current.right) {
                let leftMostParent: BinarySearchTreeNode | null | undefined = current;
                let leftMost: BinarySearchTreeNode | null | undefined = current.right;
                while (leftMost && leftMost.left !== null) {
                    leftMostParent = leftMost;
                    leftMost = leftMost.left;
                }

                if (leftMostParent === current) leftMostParent.right = leftMost?.right;
                else leftMostParent.left = leftMost?.right;
                current.data = leftMost?.data;
                return current;
            }

        }
    }

}

let bst = new BinarySearchTree({})
bst.push(5);
bst.push(2);
bst.push(3);
bst.push(1);
bst.push(7);
bst.push(6);
bst.push(8);
console.log("---:", bst.root);
bst.removeElement(5)
console.log("------:", bst.root);
