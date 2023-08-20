// https://leetcode.com/problems/linked-list-cycle
class LinkNode {
    val: any
    index: number
    next: LinkNode | null

    constructor(val?: any, index?: number, next?: LinkNode | null) {
        this.val = val ?? 0
        this.index = index ?? -1
        this.next = next ?? null
    }
}

function hasCycle(head: LinkNode | null): boolean | null {
    let current = head, i = 0;
    while (current) {
        if (current.index > -1) return true;
        current.index = i++;
        current = current.next;
    }
    return false;
}
