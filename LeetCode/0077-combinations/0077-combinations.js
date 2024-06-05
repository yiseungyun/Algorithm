/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [];
    function combination(list) {
        if (list.length === k) {
            result.push(list);
            return;
        }
        for (let i = 1; i <= n; i++) {
            if (list.length === 0) combination([i]);
            else if (list[list.length-1] < i) combination([...list, i]);
        }
    }
    combination([]);
    return result;
};