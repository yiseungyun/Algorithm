/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
    var back = s.slice(Math.ceil(s.length/2)).split('').reverse().join('');
    return s.slice(0, Math.floor(s.length/2)) === back;
};