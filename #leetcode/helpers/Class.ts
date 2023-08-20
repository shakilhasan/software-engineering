// Definition for singly-linked list.
export class ListNode {
    val: any
    next: ListNode | null

    constructor(val?: any, next?: ListNode | null) {
        this.val = val ?? 0
        this.next = next ?? null
    }
}

export class LinkList {
    head: ListNode | null;
    length: number;

    constructor() {
        this.head = null;
        this.length = 0;
    }

    push(val: any) {
        let node = new ListNode(val);
        if (this.head === null) this.head = node;
        else {
            let current: ListNode | undefined = this.head;
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
        let current: ListNode | null = this.head;
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
        let current: ListNode | null = this.head;
        let result = '';
        while (current) {
            result += current.val + '->';
            current = current.next;
        }
        return result;
    }

    join(val: any) {
        let current: ListNode | null = this.head;
        this.length += this.length - 1;
        while (current) {
            if (current.next) {
                current.next = new ListNode(val, current.next)
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
        this.head = new ListNode(val, this.head);
    }

    concat(node: ListNode | null) {
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

    count(node: ListNode | null) {
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
list.concat(new ListNode(10));
console.log(list.toString());
console.log(list.length);

