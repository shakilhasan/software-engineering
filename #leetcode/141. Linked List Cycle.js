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
    while (fast === null || fast === void 0 ? void 0 : fast.next) {
        fast = fast.next.next;
        slow = slow === null || slow === void 0 ? void 0 : slow.next;
        if (fast === slow)
            return true;
    }
    return false;
}
