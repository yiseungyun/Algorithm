/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    var result = [];
    function binary_search(start, end, flag) {
        if (start > end) return end;
        var mid = Math.floor((start+end)/2);
        if (newInterval[flag] === intervals[mid][0]) return mid;
        else if (newInterval[flag] > intervals[mid][0]) return binary_search(mid+1, end, flag);
        else return binary_search(start, mid-1, flag);
    }
    var start_index = Math.max(binary_search(0, intervals.length-1, 0), 0);
    var end_index = binary_search(0, intervals.length-1, 1);
    for (let i = 0; i < start_index; i++) result.push(intervals[i]);
    var start = 10**5, end = -1;
    for (let i = start_index; i < end_index+1; i++) {
        if (intervals[i][1] < newInterval[0]) {
            result.push(intervals[i]);
        } else {
            start = Math.min(i, start);
            end = Math.max(i, end);
        }
    }
    if (start === 10**5 && end === -1) result.push(newInterval);
    else result.push([Math.min(newInterval[0], intervals[start][0]), Math.max(newInterval[1], intervals[end][1])])
    for (let i = end_index+1; i < intervals.length; i++) result.push(intervals[i]);

    return result;
};