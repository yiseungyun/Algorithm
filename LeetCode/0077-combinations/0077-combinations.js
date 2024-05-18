/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var result = [];
    function dfs(list, range) {
        if (list.length === k) {
            result.push(list);
            return;
        }
        for (let i = 0; i < range.length; i++) {
            dfs([...list, range[i]], range.slice(i+1));
        }
    }
    dfs([], Array.from({length: n}, (_, i) => i+1));
    return result;
};