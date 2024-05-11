/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var dictionary = {};
    for (let i = 0; i < numbers.length; i++) {
        if (target-numbers[i] in dictionary) {
            return [dictionary[target-numbers[i]], i+1];
        } else {
            dictionary[numbers[i]] = i+1;
        }
    }
};