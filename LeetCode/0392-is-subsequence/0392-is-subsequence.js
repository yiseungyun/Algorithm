/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    var k = 0;
    if (s.length === 0) return true;
    for (let i = 0; i < t.length; i++) {
        if (s[k] === t[i]) {
            k++;
            if (k === s.length) return true;
        }
    }
    return false;
};