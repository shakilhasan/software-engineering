"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkList = exports.LinkListNode = void 0;
// Definition for singly-linked list.
class LinkListNode {
    val;
    index;
    next;
    constructor({ val = 0, index = -1, next = null }) {
        this.val = val;
        this.index = index;
        this.next = next;
    }
}
exports.LinkListNode = LinkListNode;
class LinkList {
    head;
    size;
    constructor({ head = null, size = 0 }) {
        this.head = head;
        this.size = size;
    }
    push(val) {
        let node = new LinkListNode({ val });
        if (this.head === null)
            this.head = node;
        else {
            let current = this.head;
            while (current) {
                if (current.next === null) {
                    current.next = node;
                    break;
                }
                current = current.next;
            }
        }
        this.size++;
    }
    pop() {
        if (this.head?.next === null) {
            this.head = null;
            return;
        }
        let current = this.head;
        while (current) {
            if (current.next?.next === null) {
                current.next = null;
                this.size--;
                break;
            }
            current = current.next;
        }
        return;
    }
    toString() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.val + '>';
            current = current.next;
        }
        return result;
    }
    join(val) {
        let current = this.head;
        this.size += this.size - 1;
        while (current) {
            if (current.next) {
                current.next = new LinkListNode({ val, next: current.next });
                current = current.next.next;
            }
            else
                break;
        }
    }
    shift() {
        this.size -= 1;
        if (this.head?.next)
            this.head = this.head?.next;
    }
    unshift(val) {
        this.size += 1;
        this.head = new LinkListNode({ val, next: this.head });
    }
    concat(node) {
        let current = this.head;
        this.size += this.count(node);
        while (current) {
            if (current.next === null) {
                current.next = node;
                break;
            }
            current = current.next;
        }
    }
    count(node) {
        let current = node, i = 0;
        while (current) {
            i++;
            current = current.next;
        }
        return i;
    }
    length() {
        let current = this.head, i = 0;
        while (current) {
            i++;
            current = current.next;
        }
        return i;
    }
    insertAt(val, index) {
        let current = this.head, i = 0;
        if (index === 0) {
            this.head = new LinkListNode({ val, next: this.head });
            return;
        }
        while (current) {
            if ((index - 1) === i++) {
                current.next = new LinkListNode({ val, next: current.next });
            }
            current = current.next;
        }
    }
    removeFrom(index) {
        let current = this.head, i = 0;
        if (this.head && index === 0) {
            this.head = this.head.next;
            return;
        }
        while (current?.next) {
            if ((index - 1) === i++) {
                current.next = current.next.next;
                break;
            }
            current = current.next;
        }
    }
    removeElement(val) {
        let current = this.head;
        if (this.head && this.head.val === val) {
            this.head = this.head.next;
            return;
        }
        while (current?.next) {
            if (current.next.val === val)
                current.next = current.next.next;
            current = current.next;
        }
    }
    isEmpty() {
        return this.head === null;
    }
    includes(val) {
        let current = this.head;
        while (current) {
            if (current.val === val)
                return true;
            current = current.next;
        }
        return false;
    }
    reverse() {
        let current = this.head, pre = null;
        while (current) {
            pre = new LinkListNode({ val: current.val, next: pre });
            if (current.next === null) {
                this.head = pre;
            }
            current = current.next;
        }
    }
    findIndex(val) {
        let current = this.head, i = 0;
        while (current) {
            if (current.val === val)
                return i;
            current = current.next;
            i++;
        }
        return -1;
    }
    findLastIndex(val) {
        let current = this.head, i = 0, lastIndex = -1;
        while (current) {
            if (current.val === val)
                lastIndex = i;
            current = current.next;
            i++;
        }
        return lastIndex;
    }
    clear() {
        this.head = null;
    }
}
exports.LinkList = LinkList;
const list = new LinkList({});
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push("last");
// list.pop();
// list.join(10);
// list.shift()
list.unshift(0);
// list.concat(new LinkListNode({val: 10}));
// list.insertAt('newInserted', 0);
list.removeFrom(0);
// list.removeElement(0);
// list.reverse();
console.log(list.toString());
// console.log(list.findLastIndex(3));
// console.log(list.findIndex(3));
// console.log(list.isEmpty());
// console.log(list.includes(1));
// console.log(list.size);
