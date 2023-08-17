"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://leetcode.com/problems/reverse-linked-list
const Class_1 = require("./helpers/Class");
function reverseList(head) {
    let result = new Class_1.ListNode();
    let current = head;
    while (current) {
        let newNode = new Class_1.ListNode();
        result.val = current.val;
        newNode.next = result;
        result = newNode;
        current = current.next;
    }
    result = result.next;
    return result;
}
