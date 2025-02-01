/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1, right = n;

    while (left <= right) {
        const pick = Math.floor((left+right)/2);
        if (guess(pick) === -1) {
            right = pick-1;
        } else if (guess(pick) === 1) {
            left = pick+1;
        } else {
            return pick;
        }
    }

    return right;
};