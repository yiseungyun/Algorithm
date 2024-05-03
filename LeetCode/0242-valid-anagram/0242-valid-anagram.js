/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var s_dict = {};
    var count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] in s_dict) s_dict[s[i]] += 1;
        else s_dict[s[i]] = 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] in s_dict) {
            if (s_dict[t[i]] === 0) return false;
            s_dict[t[i]] -= 1;
        } else {
            return false;
        }
        count += 1
    }
    if (count !== s.length) return false;
    return true;
};