/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    var k = 0;
    var result = "";
    for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] === strs[strs.length-1][k]) result += strs[0][i];
        else break;
        k++;
    }
    for (const str of strs) {
        var compare = str.length > result.length ? result.length : str.length;
        var temp = "";
        for (let i = 0; i < compare; i++) {
            if (str[i] === result[i]) {
                temp += str[i];
            }
        }
        if (temp.length < result.length) result = temp;
    }
    return result;
};