/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var DP = Array.from({length: s.length+1}, () => 0);
    DP[0] = 1;
    for (let i = 1; i < s.length+1; i++) {
        for (word of wordDict) {
            if (i-word.length >= 0 && s.slice(i-word.length, i) === word) {
                DP[i] = Math.max(DP[i-word.length], DP[i]);
            }
        }
    }
    return DP[s.length] === 1;
};