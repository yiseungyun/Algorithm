/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var number = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in number) number[nums[i]] += 1;
        else number[nums[i]] = 1;
    }
    for (num in number) {
        if (number[num] > nums.length/2) return num;
    }
};