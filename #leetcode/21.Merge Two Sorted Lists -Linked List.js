"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//https://leetcode.com/problems/merge-two-sorted-lists
const Class_1 = require("./helpers/Class");
function mergeTwoLists(list1, list2) {
    let result = new Class_1.ListNode(0, null);
    let initResult = new Class_1.ListNode(0, null);
    let preResult = null;
    while ((list1 === null || list1 === void 0 ? void 0 : list1.val) && (list2 === null || list2 === void 0 ? void 0 : list2.val)) {
        if (list1.val < list2.val && result) {
            result.val = list1 === null || list1 === void 0 ? void 0 : list1.val;
            result.next = initResult;
            if (preResult)
                preResult.next = list1;
            list1 = list1.next;
        }
        else if (list1.val >= list2.val && result) {
            result.val = list2.val;
            result.next = initResult;
            if (preResult)
                preResult.next = list2;
            list2 = list2.next;
        }
        preResult = result;
        result = result === null || result === void 0 ? void 0 : result.next;
    }
    return result;
}
