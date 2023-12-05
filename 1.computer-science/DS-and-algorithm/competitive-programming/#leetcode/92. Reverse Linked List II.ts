import {LinkListNode} from "./helpers/LinkList";

function reverseBetween(head: LinkListNode | null, left: number, right: number): LinkListNode | null {
    let pre = null, i = 1, current = head, start = head, end = head;
    while (current) {
        if (i === left - 1) {
            start = current;
            current = current.next;
            i++;
            if (current) pre = new LinkListNode({val: current.val, next: pre});
            end = pre;
            if (current) current = current.next;
            i++;
            while (current) {
                pre = new LinkListNode({val: current.val, next: pre});
                if (i == right) {
                    start.next = current;
                    if (end) end.next = current?.next;
                    break;
                }
                current = current.next;
                i++;
            }
        }
        if (current) current = current.next;
        i++;
    }
    return head;
}
