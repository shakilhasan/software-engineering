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
    var _a;
    let fast = head, slow = head;
    while (fast) {
        fast = (_a = fast.next) === null || _a === void 0 ? void 0 : _a.next;
        slow = slow === null || slow === void 0 ? void 0 : slow.next;
        if (fast === slow)
            return true;
    }
    return false;
}
