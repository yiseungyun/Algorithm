/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    function tree(start, end) {
        if (start > end) return null;
        var root = new TreeNode(preorder[index]);
        for (var i = start; i <= end; i++) {
            if (inorder[i] === root.val) break;
        }
        index++;
        root.left = tree(start, i-1);
        root.right = tree(i+1, end);
        return root;
    }
    var index = 0;
    return tree(0, preorder.length-1);
};