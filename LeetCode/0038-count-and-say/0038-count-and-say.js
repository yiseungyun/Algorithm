/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var say = "1";
    for (let number = 2; number <= n; number++) {
        var count = 1;
        var result = "";
        for (let i = 0; i < say.length-1; i++) {
            if (say[i] === say[i+1]) count++;
            else {
                result += count.toString()+say[i];
                count = 1;
            }
        }
        result += count.toString()+say[say.length-1];
        say = result;
    }
    return say;
};