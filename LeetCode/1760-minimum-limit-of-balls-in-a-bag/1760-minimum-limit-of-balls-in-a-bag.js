/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
const minimumSize = function(nums, maxOperations) {
    let left = 1, right = Math.max(...nums);
    let result = right;

    while (left <= right) {
        let operation = 0;
        const mid = Math.floor((left+right)/2);
        for (const num of nums) {
            operation += Math.floor((num-1)/mid);
        }

        if (operation <= maxOperations) {
            result = mid;
            right = mid-1;
        } else {
            left = mid+1;
        }
    }

    return result;
};