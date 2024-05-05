/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    function pow(base, exp) {
        if (exp === 0) return 1
        else if (exp % 2 === 0) return pow(base*base, exp/2);
        else return base*pow(base*base, (exp-1)/2);
    }
    var result = pow(x, Math.abs(n));
    if (n >= 0) return result;
    else return 1/result;
};