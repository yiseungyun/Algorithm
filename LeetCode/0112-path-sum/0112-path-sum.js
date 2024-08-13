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
 * @return {boolean}
 */
const hasPathSum = function(root, targetSum) {
    let result = false;

    function dfs(node, sum) {
        if (sum === targetSum && sum !== 0) {
            result = true;
        }
        if (!node) {
            return;
        }
        dfs(node.left, sum+node.val);
        dfs(node.right, sum+node.val);
    }

    if (!root) {
        return false;
    }

    dfs(root, 0);

    return result;
};