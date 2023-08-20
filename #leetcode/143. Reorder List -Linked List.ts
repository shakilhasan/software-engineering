//https://leetcode.com/problems/reorder-list
import {LinkList, LinkListNode} from "./helpers/Class";

function reorderList(head: LinkListNode | null): void {
    let list = new LinkList({head});
    let revList = new LinkList({head});
    revList.reverse();
    
    let length = list.length();
    let mid = Math.ceil(length / 2)
    let current = list.head, i = 0, revCurrent = revList.head;
    while (current && revCurrent && i < mid) {
        if (i === mid-1) {
            current.next = null;
            if(length-mid!=mid) break;
        }
        current.next = new LinkListNode({val: revCurrent.val, next: current.next})
        current = current.next.next;
        revCurrent = revCurrent.next
        i++;
    }
}
