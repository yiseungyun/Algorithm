/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function(root) {
    let count = 0;
    function search(node) {
        if (!node) return;
        count++;
        if (node.left) {
            search(node.left);
        }
        if (node.right) {
            search(node.right);
        }
    }
    search(root);

    return count;
};