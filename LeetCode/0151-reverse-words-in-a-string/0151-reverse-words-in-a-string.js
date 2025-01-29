/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = "";
    const string = s.split(" ");
    
    for (let i = string.length-1; i >= 0; i--) {
        if (string[i].length > 0) result += string[i] + " ";
    }

    return result.trim();
};