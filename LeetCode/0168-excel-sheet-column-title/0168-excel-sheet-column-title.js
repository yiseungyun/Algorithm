/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function(columnNumber) {
    let result = '';

    while (columnNumber > 0) {
        const remainder = (columnNumber-1)%26;
        result += String.fromCharCode(remainder+65);

        columnNumber = Math.floor((columnNumber-1)/26);
    }

    return result.split('').reverse().join('');
};