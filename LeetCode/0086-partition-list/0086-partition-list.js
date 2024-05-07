/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var pointer = head;
    var part1 = new ListNode(), part2 = new ListNode();
    var part1ptr = part1, part2ptr = part2;
    while (pointer) {
        if (pointer.val < x) {
            part1.next = pointer;
            part1 = part1.next;
        } else {
            part2.next = pointer;
            part2 = part2.next;
        }
        pointer = pointer.next;
    }
    part2.next = null;
    part1.next = part2ptr.next;
    return part1ptr.next;
};