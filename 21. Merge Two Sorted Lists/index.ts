/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let pHead: ListNode | null;
    let pTail: ListNode | null;

    if (!list1 || list1 === null || list1?.val === null) return list2;
    if (!list2 || list2 === null || list2?.val === null) return list1;

    if (list1.val < list2.val) {
        pHead = list1
        pTail = mergeTwoLists(list1.next, list2);
    } else {
        pHead = list2
        pTail = mergeTwoLists(list1, list2.next);
    }
    pHead.next = pTail;

    return pHead;
};