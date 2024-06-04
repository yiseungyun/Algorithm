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
 */
var array = [];
var index = 0;
var BSTIterator = function(root) {
    function inorder(node) {
        if (node === null) return;
        inorder(node.left);
        array.push(node.val);
        inorder(node.right);
    }
    inorder(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    var result = array[index];
    index++;
    return result;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if (index >= array.length) return false;
    else return true;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */