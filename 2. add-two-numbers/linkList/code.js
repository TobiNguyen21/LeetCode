
//Definition for singly - linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const arr1 = [2, 4, 3];
const arr2 = [5, 6, 4];

const addTwoNumbers = (l1, l2) => {
    let k = 0;
    let result = new ListNode(0);
    let head = result;

    while (l1 || l2) {
        currentVal_l1 = l1 ? l1.val : 0;
        currentVal_l2 = l2 ? l2.val : 0;

        if (currentVal_l1 + currentVal_l2 + k >= 10) {
            head.next = new ListNode(currentVal_l1 + currentVal_l2 + k - 10);
            k = 1;
        } else {
            head.next = new ListNode(currentVal_l1 + currentVal_l2 + k);
            k = 0
        }
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        head = head.next;
    }

    if (k === 1) head.next = new ListNode(1);
    return result.next;
}

function convertArrToListNode(arr) {
    const result = new ListNode(0);
    // console.log(`Rs: ${JSON.stringify(result)}`);
    let head = result;
    for (let i = 0; i < arr.length; i++) {
        head.next = new ListNode(arr[i]);
        head = head.next;
    }
    return result.next;
}

const l1 = convertArrToListNode(arr1);
const l2 = convertArrToListNode(arr2)

const result = addTwoNumbers(l1, l2);
console.log(`RS: ${JSON.stringify(result)}`);

