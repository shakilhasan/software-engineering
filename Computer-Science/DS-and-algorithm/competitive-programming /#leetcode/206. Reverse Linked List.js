"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://leetcode.com/problems/reverse-linked-list
const LinkList_1 = require("./helpers/LinkList");
function reverseList(head) {
    let result = new LinkList_1.LinkListNode({});
    let current = head;
    while (current) {
        let newNode = new LinkList_1.LinkListNode({});
        result.val = current.val;
        newNode.next = result;
        result = newNode;
        current = current.next;
    }
    result = result.next;
    return result;
}
