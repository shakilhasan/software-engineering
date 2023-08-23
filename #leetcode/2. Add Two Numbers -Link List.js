"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://leetcode.com/problems/add-two-numbers
const LinkList_1 = require("./helpers/LinkList");
function addTwoNumbers(l1, l2) {
    let partialSum = 0, nextCarry = 0, a = 0, b = 0, pre = new LinkList_1.LinkListNode({});
    let current = new LinkList_1.LinkListNode({});
    let resultList = new LinkList_1.LinkList({ head: current });
    while (l1 || l2 || nextCarry) {
        if (l1) {
            a = l1.val;
            l1 = l1.next;
        }
        else
            a = 0;
        if (l2) {
            b = l2.val;
            l2 = l2.next;
        }
        else
            b = 0;
        partialSum = a + b + nextCarry;
        nextCarry = partialSum >= 10 ? 1 : 0;
        current.val = partialSum % 10;
        current.next = new LinkList_1.LinkListNode({});
        pre = current;
        current = current.next;
    }
    pre.next = null;
    return resultList.head;
}
function addTwoNumbers1(l1, l2, carry = 0) {
    if (l1 || l2 || carry) {
        let partialSum = 0, nextCarry = 0, a = 0, b = 0, pre = null;
        if (l1) {
            a = l1.val;
            l1 = l1.next;
        }
        else
            a = 0;
        if (l2) {
            b = l2.val;
            l2 = l2.next;
        }
        else
            b = 0;
        partialSum = a + b + carry;
        nextCarry = partialSum >= 10 ? 1 : 0;
        return new LinkList_1.LinkListNode({ val: partialSum % 10, next: addTwoNumbers1(l1, l2, nextCarry) });
    }
    return null;
}
