// https://leetcode.com/problems/linked-list-cycle
import {LinkListNode} from "./helpers/LinkList";

function hasCycle(head: LinkListNode | null | undefined): boolean | null {
    let current = head, i = 0;
    while (current) {
        if (current.index > -1) return true;
        current.index = i++;
        current = current.next;
    }
    return false;
}

function hasCycle1(head: LinkListNode | null | undefined): boolean | null {
    let fast = head, slow = head;
    while (fast?.next) {
        fast = fast.next.next;
        slow = slow?.next;
        if (fast === slow) return true;
    }
    return false;
}
