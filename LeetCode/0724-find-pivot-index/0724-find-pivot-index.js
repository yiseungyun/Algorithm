/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        const left = sumOfArray(0, i, nums);
        const right = sumOfArray(i+1, nums.length, nums);
        if (left === right) return i;
    }
    return -1;
};

function sumOfArray(start, end, array) {
    let sum = 0;
    for (let i = start; i < end; i++) {
        sum += array[i];
    }
    return sum;
}