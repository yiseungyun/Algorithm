/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var DP = Array.from(nums);
    DP[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
       DP[i] = Math.max(0, DP[i-1]) + nums[i];
    }
    return Math.max(...DP);
};