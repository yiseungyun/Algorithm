/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var result = [];
    function dfs(list) {
        if (list.length === nums.length) {
            result.push(list);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (list.indexOf(nums[i]) === -1) {
                dfs([...list, nums[i]]);
            }
        }
    }
    dfs([]);
    return result;
};