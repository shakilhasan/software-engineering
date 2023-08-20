// https://leetcode.com/problems/linked-list-cycle
import {LinkListNode} from "./helpers/Class";

function hasCycle(head: LinkListNode | null): boolean | null {
    let current = head, i = 0;
    while (current) {
        if (current.index > -1) return true;
        current.index = i++;
        current = current.next;
    }
    return false;
}
