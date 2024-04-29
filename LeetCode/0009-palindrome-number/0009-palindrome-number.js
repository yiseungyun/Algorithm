/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    var x = x.toString();
    var front = x.slice(0, Math.floor(x.length/2));
    var back = x.slice(Math.ceil(x.length/2));
    if (front === back.split("").reverse().join("")) {
        return true
    }
    return false;
};