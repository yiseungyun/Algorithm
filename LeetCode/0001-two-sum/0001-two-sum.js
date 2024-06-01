/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var number = {};
    for (let i = 0; i < nums.length; i++) {
        if (target-nums[i] in number) {
            return [number[target-nums[i]], i];
        } else {
            number[nums[i]] = i;
        }
    }
};