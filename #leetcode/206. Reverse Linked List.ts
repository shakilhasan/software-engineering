//https://leetcode.com/problems/reverse-linked-list
import {ListNode} from "./helpers/Class";
function reverseList(head: ListNode | null): ListNode | null {
    let result:ListNode | null=new ListNode();
    let current=head
    while (current){
        let pre:ListNode | null=new ListNode();

        result.val=current.val;
        pre.next=result;
        current=current.next;
    }
    return null;
}
