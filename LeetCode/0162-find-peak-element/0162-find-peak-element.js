/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    function binary_search(start, end) {
        if (start >= end) return start;
        var mid = Math.floor((start+end)/2);
        if (nums[mid-1] < nums[mid] && nums[mid] > nums[mid+1]) return mid;
        else if (nums[mid] < nums[mid+1]) return binary_search(mid+1, end);
        else return binary_search(start, mid-1);
    }
    return binary_search(0, nums.length-1);
};