"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://leetcode.com/problems/merge-two-sorted-lists
const Class_1 = require("./helpers/Class");
function mergeTwoLists(list1, list2) {
    let result = new Class_1.LinkListNode({});
    let resultHead = result;
    let pre = new Class_1.LinkListNode({});
    if (!list1 && !list2)
        return list1;
    while ((list1 || list2) && result) {
        if ((list1 && !list2) || (list2 && list1 && ((list1 === null || list1 === void 0 ? void 0 : list1.val) <= (list2 === null || list2 === void 0 ? void 0 : list2.val)))) {
            result.val = list1.val;
            result.next = new Class_1.LinkListNode({});
            list1 = list1.next;
        }
        else if ((!list1 && list2) || (list2 && list1 && (list1.val > list2.val))) {
            result.val = list2.val;
            result.next = new Class_1.LinkListNode({});
            list2 = list2.next;
        }
        pre = result;
        result = result === null || result === void 0 ? void 0 : result.next;
    }
    pre.next = null;
    return resultHead;
}
