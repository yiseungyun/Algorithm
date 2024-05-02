/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    function binary_search(start, end) {
        var mid = Math.floor((start+end)/2);
        if (start > end) return start;
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            return binary_search(mid+1, end);
        } else {
            return binary_search(start, mid-1);
        }
    }

    var index = binary_search(0, nums.length-1);
    return index;
};