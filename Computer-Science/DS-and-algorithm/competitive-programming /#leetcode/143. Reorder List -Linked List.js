"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://leetcode.com/problems/reorder-list
const LinkList_1 = require("./helpers/LinkList");
function reorderList(head) {
    let list = new LinkList_1.LinkList({ head });
    let revList = new LinkList_1.LinkList({ head });
    revList.reverse();
    let length = list.length();
    let mid = Math.ceil(length / 2);
    let current = list.head, i = 0, revCurrent = revList.head;
    while (current && revCurrent && i < mid) {
        if (i === mid - 1) {
            current.next = null;
            if (length - mid != mid)
                break;
        }
        current.next = new LinkList_1.LinkListNode({ val: revCurrent.val, next: current.next });
        current = current.next.next;
        revCurrent = revCurrent.next;
        i++;
    }
}
