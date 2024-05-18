/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [];
    function dfs(list) {
        if (list.length === k) {
            result.push(list);
            return;
        }
        for (let i = 1; i < n+1; i++) {
            if (list[list.length-1] < i || list.length === 0) {
                dfs([...list, i]);
            }
        }
    }
    dfs([]);
    return result;
};