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
 * @return {TreeNode}
 */
const invertTree = function(root) {
    const result = root;

    function reverse(node) {
        const temp = node.left;
        node.left = node.right;
        node.right = temp;
    }

    function search(node) {
        reverse(node);
        if (node.left) search(node.left);
        if (node.right) search(node.right);
    }

    if (root) search(root);

    return result;
};