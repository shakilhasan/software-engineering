"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://leetcode.com/problems/remove-nth-node-from-end-of-list
const LinkList_1 = require("./helpers/LinkList");
function removeNthFromEnd(head, n) {
    let list = new LinkList_1.LinkList({ head });
    length = list.length();
    list.removeFrom(length - n);
    return list.head;
    list;
}