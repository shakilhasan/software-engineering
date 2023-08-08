//https://leetcode.com/problems/merge-two-sorted-lists
import {ListNode, LinkList} from "./helpers/Class";

function mergeTwoLists(list1: ListNode | null | undefined, list2: ListNode | null | undefined): ListNode | null | undefined {
    let result: ListNode | null | undefined = new ListNode();
    let resultHead = result;
    let pre: ListNode | null | undefined = new ListNode();
    if (!list1 && !list2) return list1;
    while ((list1 || list2) && result) {
        if ((list1 && !list2) || (list2 && list1 && (list1?.val <= list2?.val))) {
            result.val = list1.val;
            result.next = new ListNode();
            list1 = list1.next;
        } else if ((!list1 && list2) || (list2 && list1 && (list1.val > list2.val))) {
            result.val = list2.val;
            result.next = new ListNode();
            list2 = list2.next;
        }
        pre = result;
        result = result?.next;
    }
    pre.next = null;
    return resultHead;
}
