/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var left = 0, right = numbers.length-1;
    while (1) {
        if (numbers[left]+numbers[right] === target) {
            return [left+1, right+1];
        } else if (numbers[left]+numbers[right] > target) {
            right -= 1;
        } else {
            left += 1;
        }
    }
};