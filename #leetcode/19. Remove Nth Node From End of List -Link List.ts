//https://leetcode.com/problems/remove-nth-node-from-end-of-list
import {LinkList, LinkListNode} from "./helpers/LinkList";

function removeNthFromEnd(head: LinkListNode | null, n: number): LinkListNode | null {
    let list=new LinkList({head});
    length=list.length();
    list.removeFrom(length-n)

    return list.head;list
}
