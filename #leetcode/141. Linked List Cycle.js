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
