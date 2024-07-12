/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const word = {};
    let result = true;
    for (let i = 0; i < magazine.length; i++) {
        if (word[magazine[i]]) word[magazine[i]] += 1;
        else word[magazine[i]] = 1;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (word[ransomNote[i]] === 1) {
            delete word[ransomNote[i]];
        } else if (word[ransomNote[i]]) {
            word[ransomNote[i]] -= 1;
        } else {
            return false;
        }
    }
    return result;
};