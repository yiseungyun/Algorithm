/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function createNode(start, end) {
        if (start > end) return null;
        var mid = Math.floor((start+end)/2);
        var root = new TreeNode(nums[mid]);
        root.left = createNode(start, mid-1);
        root.right = createNode(mid+1, end);
        return root;
    }
    return createNode(0, nums.length-1);
};