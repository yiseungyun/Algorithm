/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const numberDict = { 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wzyz" };
    let result = [];

    for (const digit of digits) {
        if (result.length === 0) {
            result.push(...numberDict[digit].split(""));
        } else {
            let newResult = [];
            while (result.length !== 0) {
                const string = result.pop();
                const items = numberDict[digit].split("");
                for (const item of items) {
                    newResult.push(string+item);
                }
            }
            result = [...newResult];
        }
    }

    return result;
};