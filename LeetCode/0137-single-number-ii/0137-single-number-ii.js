/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    const exist = {};
    for (const num of nums) {
        if (exist[num]) {
            exist[num] += 1;
        } else {
            exist[num] = 1;
        }
    }

    for (const num in exist) {
        if (exist[num] === 1) {
            return Number(num);
        }
    }
};