/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
const minimumSize = function(nums, maxOperations) {
    let left = 1;
    let right = Math.max(...nums);
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left+right)/2);

        if (isPenaltyPossible(nums, maxOperations, mid)) {
            result = mid;
            right = mid-1; 
        } else {
            left = mid + 1;
        }
    }

    return result;
};

const isPenaltyPossible = (nums, maxOperations, mid) => {
    let operations = 0;
    for (const num of nums) {
        operations += Math.floor((num-1)/mid);
        if (operations > maxOperations) return false;
    }

    return true;
}