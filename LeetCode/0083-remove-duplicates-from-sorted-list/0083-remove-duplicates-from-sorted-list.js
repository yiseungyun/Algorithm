/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    let newNode = new ListNode(-101);
    const result = newNode;
    let prevNode = new ListNode(-101);

    while (head) {
        if (prevNode.val !== head.val) {
            newNode.next = new ListNode(head.val);
            newNode = newNode.next;
        }
        prevNode = head;
        head = head.next;
    }

    return result.next;
};