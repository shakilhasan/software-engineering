//https://leetcode.com/problems/merge-two-sorted-lists
import {LinkListNode, LinkList} from "./helpers/LinkList";

function mergeTwoLists(list1: LinkListNode | null | undefined, list2: LinkListNode | null | undefined): LinkListNode | null | undefined {
    let result: LinkListNode | null | undefined = new LinkListNode({});
    let resultHead = result;
    let pre: LinkListNode | null | undefined = new LinkListNode({});
    if (!list1 && !list2) return list1;
    while ((list1 || list2) && result) {
        if ((list1 && !list2) || (list2 && list1 && (list1?.val <= list2?.val))) {
            result.val = list1.val;
            result.next = new LinkListNode({});
            list1 = list1.next;
        } else {
            result.val = list2?.val;
            result.next = new LinkListNode({});
            list2 = list2?.next;
        }
        pre = result;
        result = result?.next;
    }
    pre.next = null;
    return resultHead;
}
function mergeTwoLists1(list1: LinkListNode | null , list2: LinkListNode | null ): LinkListNode | null  {
    let resultHead: LinkListNode | null = new LinkListNode({});
    let current: LinkListNode | null = resultHead;
    while ((list1 || list2) && current) {
        if ((list1 && !list2) || (list2 && list1 && (list1?.val <= list2?.val))) {
            current.next = list1
            list1=list1.next;
        }
        else {
            current.next = list2;
            if(list2) list2=list2?.next;
        }
        current = current.next
    }
    return resultHead.next;
}
