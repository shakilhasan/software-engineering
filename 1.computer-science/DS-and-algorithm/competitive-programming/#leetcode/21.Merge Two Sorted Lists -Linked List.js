"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://leetcode.com/problems/merge-two-sorted-lists
const LinkList_1 = require("./helpers/LinkList");
function mergeTwoLists(list1, list2) {
    let result = new LinkList_1.LinkListNode({});
    let resultHead = result;
    let pre = new LinkList_1.LinkListNode({});
    if (!list1 && !list2)
        return list1;
    while ((list1 || list2) && result) {
        if ((list1 && !list2) || (list2 && list1 && (list1?.val <= list2?.val))) {
            result.val = list1.val;
            result.next = new LinkList_1.LinkListNode({});
            list1 = list1.next;
        }
        else {
            result.val = list2?.val;
            result.next = new LinkList_1.LinkListNode({});
            list2 = list2?.next;
        }
        pre = result;
        result = result?.next;
    }
    pre.next = null;
    return resultHead;
}
function mergeTwoLists1(list1, list2) {
    let resultHead = new LinkList_1.LinkListNode({});
    let current = resultHead;
    while ((list1 || list2) && current) {
        if ((list1 && !list2) || (list2 && list1 && (list1?.val <= list2?.val))) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            if (list2)
                list2 = list2?.next;
        }
        current = current.next;
    }
    return resultHead.next;
}
