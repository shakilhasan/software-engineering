//https://leetcode.com/problems/merge-two-sorted-lists
 //Definition for singly-linked list.
// status: not accepted
 class ListNode {
     val: number
    next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
function mergeTwoLists(list1: ListNode, list2: ListNode): ListNode | null {
    let result:ListNode= new ListNode(0,null);
    while (list1.next && list2.next){
        if(list1.val<list2.val && list1.next){
            result.val=list1.val;
            result.next=list1;
            list1=list1.next;
        }else  if(list1.val>=list2.val && list2.next){
            result.val=list2.val;
            result.next=list2;
            list2=list2.next;
        }
    }
    return  result;
};
let list1:ListNode= new ListNode(10,null);
let list2:ListNode= new ListNode(10,null);

console.log(mergeTwoLists(list1,list2))


