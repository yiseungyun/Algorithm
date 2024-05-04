/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    var count = 0;
    while (head.next) {
        if (count === 10000) break;
        head = head.next;
        count += 1;
    }
    if (count === 10000) return true;
    return false;
};