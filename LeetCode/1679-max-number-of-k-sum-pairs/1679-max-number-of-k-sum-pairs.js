/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);
    let count = 0;

    let left = 0, right = nums.length-1;
    while (left < right) {
        if (nums[left]+nums[right] > k) {
            right--;
        } else if (nums[left]+nums[right] < k) {
            left++;
        } else {
            count++;
            left++;
            right--;
        }
    }

    return count;
};