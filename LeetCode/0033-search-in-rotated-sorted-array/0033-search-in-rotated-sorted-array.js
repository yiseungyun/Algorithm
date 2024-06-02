/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function start_search(start, end) {
        if (start >= end) return end;
        var mid = Math.floor((start+end)/2);
        if (nums[start] > nums[mid]) {
            return start_search(start+1, mid);
        } else if (nums[mid] > nums[end]) {
            return start_search(mid+1, end);
        } else {
            return start;
        }
    }
    var start_index = start_search(0, nums.length-1);
    function binary_search(start, end) {
        if (start >= end && nums[end] === target) return end;
        else if (start >= end) return -1;
        var mid = Math.floor((start+end)/2);
        if (target > nums[mid]) {
            return binary_search(mid+1, end);
        } else if (target < nums[mid]) {
            return binary_search(start, mid-1);
        } else {
            return mid;
        }
    }
    if (nums[nums.length-1] > target) {
        return binary_search(start_index, nums.length-1);
    } else if (nums[nums.length-1] < target) {
        return binary_search(0, start_index-1);
    } else {
        return nums.length-1;
    }
};