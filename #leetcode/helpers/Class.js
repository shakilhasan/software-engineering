"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkList = exports.LinkListNode = void 0;
// Definition for singly-linked list.
class LinkListNode {
    constructor({ val = 0, index = -1, next = null }) {
        this.val = val;
        this.index = index;
        this.next = next;
    }
}
exports.LinkListNode = LinkListNode;
class LinkList {
    constructor() {
        this.head = null;
        this.length = 0;
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
        this.length++;
    }
    pop() {
        var _a;
        if (this.head === null)
            return;
        let current = this.head;
        while (current) {
            if (((_a = current.next) === null || _a === void 0 ? void 0 : _a.next) === null) {
                current.next = null;
                this.length--;
                break;
            }
            current = current.next;
        }
    }
    toString() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.val + '->';
            current = current.next;
        }
        return result;
    }
    join(val) {
        let current = this.head;
        this.length += this.length - 1;
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
        var _a, _b;
        this.length -= 1;
        if ((_a = this.head) === null || _a === void 0 ? void 0 : _a.next)
            this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
    }
    unshift(val) {
        this.length += 1;
        this.head = new LinkListNode({ val, next: this.head });
    }
    concat(node) {
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
    count(node) {
        let current = node, i = 0;
        while (current) {
            i++;
            current = current.next;
        }
        return i;
    }
}
exports.LinkList = LinkList;
const list = new LinkList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push("last");
// list.pop();
// list.join(10);
// list.shift()
list.unshift("first");
list.concat(new LinkListNode({ val: 10 }));
console.log(list.toString());
console.log(list.length);
