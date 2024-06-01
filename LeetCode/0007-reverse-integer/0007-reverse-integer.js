/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x.toString().split('').reverse().join('');
    if (x[x.length-1] === '-') {
        x = -Number(x.replace('-', ''));
    } else {
        x = Number(x);
    }
    if (2**31-1 <= x || -(2**31) >= x) return 0;
    return x;
};