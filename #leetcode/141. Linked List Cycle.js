"use strict";
// https://leetcode.com/problems/linked-list-cycle
class LinkNode {
    constructor(val, index, next) {
        this.val = val !== null && val !== void 0 ? val : 0;
        this.index = index !== null && index !== void 0 ? index : -1;
        this.next = next !== null && next !== void 0 ? next : null;
    }
}
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
