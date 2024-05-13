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
var getMinimumDifference = function(root) {
    var node_list = [];
    var result = 10**5+1;
    function inorder(node) {
        if (node === null) return;
        inorder(node.left);
        if (node_list.length > 0) result = Math.min(result, Math.abs(node_list[node_list.length-1]-node.val));
        node_list.push(node.val);
        inorder(node.right);
    }
    inorder(root);
    return result;
};