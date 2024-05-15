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
var sumNumbers = function(root) {
    var number_list = [];
    var result = 0;
    function findLeaf(node, number) {
        if (node.left === null && node.right === null) {
            number_list.push(number);
            return;
        }
        if (node.left) findLeaf(node.left, number+node.left.val.toString());
        if (node.right) findLeaf(node.right, number+node.right.val.toString());
    }
    findLeaf(root, root.val.toString());
    for (let i = 0; i < number_list.length; i++) {
        result += parseInt(number_list[i]);
    }
    return result;
};