//https://leetcode.com/problems/reverse-linked-list
import {ListNode} from "./helpers/Class";
function reverseList(head: ListNode | null): ListNode | null {
    let result:ListNode | null=new ListNode();
    let current=head
    while (current){
        let newNode:ListNode | null=new ListNode();
        result.val=current.val;
        newNode.next=result;
        result=newNode;
        current=current.next;
    }
    result=result.next;
    return result;
}
