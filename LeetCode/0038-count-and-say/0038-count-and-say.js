/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    function count_number(number) {
        var count = 1;
        var result = "";
        for (let i = 0; i < number.length-1; i++) {
            if (number[i] === number[i+1]) count++;
            else {
                result += (count.toString()+number[i]);
                count = 1;
            }
        }
        if (count > 0) {
            result += (count.toString()+number[number.length-1]);
        } else {
            result += "1"+(number[number.length-1]);
        }
        return result;
    }

    var previous = "1";
    for (let i = 1; i < n; i++) {
        previous = count_number(previous);
    }
    return previous;
};