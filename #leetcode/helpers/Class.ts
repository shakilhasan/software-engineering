// Definition for singly-linked list.
export class ListNode {
    val: number
    next: ListNode | null
    constructor( val?: number,  next?: ListNode | null) {
        this.val = val ?? 0
        this.next = next ?? null
    }
}

export class LinkList {
    head: ListNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(val: number) {
        let node=new ListNode(val);
        if(this.head===null)this.head=node;
        else {
            let current: ListNode | undefined =this.head;
            while (current){
                if(current.next===null)current.next=node;
                current=current.next;
            }
        }
        this.size++;
    }

}
