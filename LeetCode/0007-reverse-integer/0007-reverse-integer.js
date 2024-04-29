/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var x_array = x.toString().split("").reverse()
    var result;
    if (x_array[x_array.length-1] === "-") {
        x_array.pop();
        x_array = x_array.join("");
        result = -Number(x_array);
    } else {
        x_array = x_array.join("");
        result = Number(x_array);
    }
    if (result <= (-2)**31 || result >= 2**31-1) {
        return 0;
    }
    return result;
};