/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = maxSum = nums.slice(0, k).reduce((acc, curr) => acc + curr)
    for (let i = k; i < nums.length; i++) {
        sum = sum + nums[i] - nums[i-k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum/k;
};