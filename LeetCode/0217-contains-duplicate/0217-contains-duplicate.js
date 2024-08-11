/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let duplicate = {};
    return nums.some(number => {
      if (duplicate[number]) {
        return true;
      } else {
        duplicate[number] = true;
      }
    });
};