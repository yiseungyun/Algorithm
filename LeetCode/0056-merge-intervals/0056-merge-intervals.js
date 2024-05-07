/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    var result = [];
    intervals.sort((a, b) =>
        a[0] < b[0] ? -1 : a[0] === b[0] ? a[1] > b[1] ? 1 : -1 : 1);
    var previous = [-1, -1];
    for (const interval of intervals) {
        if (previous[1] < interval[0]) {
            result.push(interval);
            previous = interval;
        } else {
            result.pop();
            result.push([previous[0], Math.max(previous[1], interval[1])]);
            previous = [previous[0], Math.max(previous[1], interval[1])];
        }
    }
    return result;
};