/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1], [1, 1]];

    for (let i = 2; i < numRows; i++) {
        const lastRow = result[i-1];
        let newRow = [1];
        for (let j = 0; j < lastRow.length-1; j++) {
            newRow.push(lastRow[j]+lastRow[j+1]);
        }
        newRow.push(1);
        result.push(newRow);
    }

    return result.slice(0, numRows);
};