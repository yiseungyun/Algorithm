/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let result = "";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "*") {
            result = result.slice(0, result.length-1);
        } else {
            result += s[i];
        }
    }

    return result;
};