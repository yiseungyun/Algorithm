/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const numDict = {};
    let sortList = [];

    for (const num of nums) {
        if (numDict[num]) {
            numDict[num] += 1;
        } else {
            numDict[num] = 1;
        }
    }

    for (const num in numDict) {
        sortList.push([num, numDict[num]]);
    }

    sortList = sortList.sort((a, b) => b[1] - a[1]).slice(0, k);

    return sortList.map(array => { return Number(array[0]) });
};