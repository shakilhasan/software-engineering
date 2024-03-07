import {LinkList, LinkListNode} from "./helpers/LinkList";

function reverseBetween(head: LinkListNode | null, left: number, right: number): LinkListNode | null {
    let pre = null, i = 1, current = head, start = head, end = head;
    while (current) {
        if (i === left - 1 || left == 1) {
            start = current;
            if (left > 1) current = current.next, i++;
            if (current) pre = new LinkListNode({val: current.val, next: pre});
            end = pre;
            if (current) current = current.next, i++;
            while (current) {
                pre = new LinkListNode({val: current.val, next: pre});
                if (i == right) {
                    start.next = pre;
                    if (end) end.next = current?.next;
                    if (left == 1) return pre;
                    break;
                }
                current = current.next, i++;
            }
        }
        if (current) current = current.next, i++;
    }
    return head;
}

console.log(new LinkList({}).toString(reverseBetween(new LinkList({}).pushArray([1, 2, 3, 4, 5]), 2, 4))); //[1,4,3,2,5]
console.log(new LinkList({}).toString(reverseBetween(new LinkList({}).pushArray([5]), 1, 1))); //[5]
console.log(new LinkList({}).toString(reverseBetween(new LinkList({}).pushArray([3, 5]), 1, 2))); //[5,3]
