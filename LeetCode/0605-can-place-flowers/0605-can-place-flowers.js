/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let previous = -2;
    let count = 0;
    for (let i = 0; i < flowerbed.length-1; i++) {
        if (flowerbed[i] === 1) {
            previous = i;
        } else if (i-previous >= 2 && flowerbed[i+1] === 0) {
            flowerbed[i] = 1;
            previous = i;
            count++;
        }
    }

    if (!flowerbed[flowerbed.length-2] && !flowerbed[flowerbed.length-1]) count++;

    return count >= n;
};