/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    var candy_list = Array.from({length: ratings.length}, () => 1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]) candy_list[i] = candy_list[i-1]+1;
    }
    for (let i = ratings.length-2; i >= 0; i--) {
        if (ratings[i] > ratings[i+1]) candy_list[i] = Math.max(candy_list[i+1]+1, candy_list[i]);
    }
    var result = candy_list.reduce((sum, curr) => {
        return sum + curr;
    })
    return result;
};