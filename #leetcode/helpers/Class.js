"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkList = exports.ListNode = void 0;
// Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = val !== null && val !== void 0 ? val : 0;
        this.next = next !== null && next !== void 0 ? next : null;
    }
}
exports.ListNode = ListNode;
class LinkList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    push(val) {
        let node = new ListNode(val);
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
        while (current) {
            if (current.next) {
                current.next = new ListNode(val, current.next);
                current = current.next.next;
            }
            else
                break;
        }
    }
    shift() {
        var _a, _b;
        if ((_a = this.head) === null || _a === void 0 ? void 0 : _a.next)
            this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
    }
    unshift(val) {
        this.head = new ListNode(val, this.head);
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
console.log(list.toString());
console.log(list.length);
