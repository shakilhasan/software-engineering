// Source: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
import {LinkList, LinkListNode} from "./helpers/LinkList";
function deleteDuplicates(head: LinkListNode | null): LinkListNode | null {
    let cur = head;
    while (cur){
        while (cur.next && cur.val === cur.next.val){
            cur.next = cur.next.next;
        }
        cur = cur.next;
    }
    return head;
}

const list = new LinkList({});
list.pushArray([1,1,2]);
deleteDuplicates(list.head);
console.log(list.toString());
