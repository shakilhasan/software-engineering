"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasCycle(head) {
    let current = head, i = 0;
    while (current) {
        if (current.index > -1)
            return true;
        current.index = i++;
        current = current.next;
    }
    return false;
}
function hasCycle1(head) {
    let fast = head, slow = head;
    while (fast) {
        fast = fast.next?.next;
        slow = slow?.next;
        if (fast === slow)
            return true;
    }
    return false;
}
