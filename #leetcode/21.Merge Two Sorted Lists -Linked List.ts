//https://leetcode.com/problems/merge-two-sorted-lists
import {LinkListNode, LinkList} from "./helpers/Class";

function mergeTwoLists(list1: LinkListNode | null | undefined, list2: LinkListNode | null | undefined): LinkListNode | null | undefined {
    let result: LinkListNode | null | undefined = new LinkListNode();
    let resultHead = result;
    let pre: LinkListNode | null | undefined = new LinkListNode();
    if (!list1 && !list2) return list1;
    while ((list1 || list2) && result) {
        if ((list1 && !list2) || (list2 && list1 && (list1?.val <= list2?.val))) {
            result.val = list1.val;
            result.next = new LinkListNode();
            list1 = list1.next;
        } else if ((!list1 && list2) || (list2 && list1 && (list1.val > list2.val))) {
            result.val = list2.val;
            result.next = new LinkListNode();
            list2 = list2.next;
        }
        pre = result;
        result = result?.next;
    }
    pre.next = null;
    return resultHead;
}
