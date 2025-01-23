/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0, right = 0;
    while (right <= nums.length-1) {
        if (nums[left] === 0 && nums[right] === 0) {
            right++;
        } else {
            const temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
            right++;
        }
    }
};