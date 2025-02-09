/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const length = columnTitle.length;
    let result = 0;

    for (let i = 0; i < length; i++) {
        result += (columnTitle[length-i-1].charCodeAt()-64)*26**i;
    }

    return result;
};