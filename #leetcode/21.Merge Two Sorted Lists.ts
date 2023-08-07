//https://leetcode.com/problems/merge-two-sorted-lists
import {ListNode} from "./helpers/Class";

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let result: ListNode | null | undefined = new ListNode(0, null);
    let initResult: ListNode | null | undefined = new ListNode(0, null);
    let preResult: ListNode | null | undefined = null
    while (list1?.val && list2?.val) {
        if (list1.val < list2.val && result ) {
            result.val = list1?.val;
            result.next = initResult;
            if(preResult) preResult.next = list1;
            list1 = list1.next;
        } else if (list1.val >= list2.val && result) {
            result.val = list2.val;
            result.next = initResult;
            if(preResult) preResult.next = list2;
            list2 = list2.next;
        }
        preResult = result;
        result = result?.next;
    }
    return result;
}
