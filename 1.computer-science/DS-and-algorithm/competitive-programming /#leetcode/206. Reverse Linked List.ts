//https://leetcode.com/problems/reverse-linked-list
import {LinkListNode} from "./helpers/LinkList";
function reverseList(head: LinkListNode | null | undefined): LinkListNode | null | undefined {
    let result:LinkListNode | null | undefined=new LinkListNode({});
    let current=head
    while (current){
        let newNode:LinkListNode | null | undefined=new LinkListNode({});
        result.val=current.val;
        newNode.next=result;
        result=newNode;
        current=current.next;
    }
    result=result.next;
    return result;
}
