/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    var index = {};
    for (let i = 0; i < nums.length; i++) {
        if (index[nums[i]] !== undefined) {
            if (i-index[nums[i]] <= k) return true;
        }
        index[nums[i]] = i;
    }
    return false;
};