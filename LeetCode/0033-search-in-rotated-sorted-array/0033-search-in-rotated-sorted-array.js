/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    function start_search(start, end) {
        var mid = Math.floor((start+end)/2);
        if (start >= end) return end;
        if (nums[start] < nums[end]) {
            return start;
        }
        if (nums[start] > nums[mid]) {
            return start_search(start, mid);
        } else {
            return start_search(mid+1, end);
        }
    }
    var start_index = start_search(0, nums.length-1);
    function binary_search(start, end) {
        var mid = Math.floor((start+end)/2);
        if (start > end) return -1;
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            return binary_search(start, mid-1);
        } else {
            return binary_search(mid+1, end);
        }
    }

    var first = binary_search(0, start_index-1);
    var second = binary_search(start_index, nums.length-1);
    if (first === -1 && second === -1) return -1;
    else if (first > -1) return first;
    else return second;
};