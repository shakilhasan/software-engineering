// Definition for singly-linked list.
export class LinkListNode {
    val: any
    index: number
    next: LinkListNode | null

    constructor({val = 0, index = -1, next = null}: {
        val?: any, index?: number, next?: LinkListNode | null
    }) {
        this.val = val;
        this.index = index;
        this.next = next;
    }

}

export class LinkList {
    head: LinkListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(val: any) {
        let node = new LinkListNode({val});
        if (this.head === null) this.head = node;
        else {
            let current: LinkListNode | undefined = this.head;
            while (current) {
                if (current.next === null) {
                    current.next = node;
                    break;
                }
                current = current.next;
            }
        }
        this.length++;
    }

    pop() {
        if (this.head === null) return;
        let current: LinkListNode | null = this.head;
        while (current) {
            if (current.next?.next === null) {
                current.next = null;
                this.length--;
                break;
            }
            current = current.next;
        }
    }

    toString() {
        let current: LinkListNode | null = this.head;
        let result = '';
        while (current) {
            result += current.val + '->';
            current = current.next;
        }
        return result;
    }

    join(val: any) {
        let current: LinkListNode | null = this.head;
        this.length += this.length - 1;
        while (current) {
            if (current.next) {
                current.next = new LinkListNode({val, next:current.next})
                current = current.next.next;
            } else break;
        }
    }

    shift() {
        this.length -= 1;
        if (this.head?.next) this.head = this.head?.next
    }

    unshift(val: any) {
        this.length += 1;
        this.head = new LinkListNode({val, next:this.head});
    }

    concat(node: LinkListNode | null) {
        let current = this.head;
        this.length += this.count(node);
        while (current) {
            if (current.next === null) {
                current.next = node;
                break;
            }
            current = current.next;
        }
    }

    count(node: LinkListNode | null) {
        let current = node, i = 0;
        while (current) {
            i++;
            current = current.next;
        }
        return i;
    }


}

const list = new LinkList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push("last");
// list.pop();
// list.join(10);
// list.shift()
list.unshift("first")
list.concat(new LinkListNode({val:10}));
console.log(list.toString());
console.log(list.length);

