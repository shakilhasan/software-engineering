//https://leetcode.com/problems/add-two-numbers
import {LinkList, LinkListNode} from "./helpers/LinkList";

function addTwoNumbers(l1: LinkListNode | null, l2: LinkListNode | null): LinkListNode | null {
    let partialSum = 0, nextCarry = 0, a = 0, b = 0, pre = new LinkListNode({});
    let current = new LinkListNode({})
    let resultList = new LinkList({head: current})
    while (l1 || l2 || nextCarry) {
        if (l1) {
            a = l1.val
            l1 = l1.next;
        } else a = 0

        if (l2) {
            b = l2.val
            l2 = l2.next;
        } else b = 0;

        partialSum = a + b + nextCarry;
        nextCarry = partialSum >= 10 ? 1 : 0
        current.val = partialSum % 10;
        current.next = new LinkListNode({})
        pre = current;
        current = current.next;
    }
    pre.next = null;
    return resultList.head;
}

function addTwoNumbers1(l1: LinkListNode | null, l2: LinkListNode | null, carry: number = 0): LinkListNode | null {
    if (l1 || l2 || carry) {
        let partialSum = 0, nextCarry = 0, a = 0, b = 0, pre = null;
        if (l1) {
            a = l1.val
            l1 = l1.next;
        } else a = 0

        if (l2) {
            b = l2.val
            l2 = l2.next;
        } else b = 0;

        partialSum = a + b + carry;
        nextCarry = partialSum >= 10 ? 1 : 0
        return new LinkListNode({val: partialSum % 10, next: addTwoNumbers1(l1, l2, nextCarry)})
    }
    return null;
}
