/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prev = strs[0];
    for (let i = 1; i < strs.length; i++) {
        var len = prev.length > strs[i].length ? strs[i].length : prev.length;
        var result = [];
        for (let j = 0; j < len; j++) {
            if (strs[i][j] === prev[j]) {
                result.push(prev[j]);
            } else {
                break;
            }
        }
        result = result.join("");
        prev = result;
    }
    return prev;
};