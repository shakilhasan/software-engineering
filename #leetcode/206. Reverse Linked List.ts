//https://leetcode.com/problems/reverse-linked-list
import {LinkListNode} from "./helpers/LinkList";
function reverseList(head: LinkListNode | null): LinkListNode | null {
    let result:LinkListNode | null=new LinkListNode({});
    let current=head
    while (current){
        let newNode:LinkListNode | null=new LinkListNode({});
        result.val=current.val;
        newNode.next=result;
        result=newNode;
        current=current.next;
    }
    result=result.next;
    return result;
}
