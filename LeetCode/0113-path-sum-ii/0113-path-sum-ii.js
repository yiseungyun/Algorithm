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
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function(root, targetSum) {
    let result = [];

    function findPathSum(node, sum, path) {
        if (!node.left && !node.right && targetSum === sum) {
            result.push(path);
        }

        if (node.left) {
            findPathSum(node.left, sum+node.left.val, [...path, node.left.val]);
        }
        if (node.right) {
            findPathSum(node.right, sum+node.right.val, [...path, node.right.val]);
        }
    }

    if (!root) {
        return [];
    }
    findPathSum(root, root.val, [root.val]);

    return result;
};