/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function(str1, str2) {
    const length1 = str1.length;
    const length2 = str2.length;
    let gcdNum;

    if (length1 > length2) {
        gcdNum = gcd(length1, length2);
    } else {
        gcdNum = gcd(length2, length1);
    }

    const subStr = length1 > length2 ? str2.slice(0, gcdNum) : str1.slice(0, gcdNum);
    for (let i = 0; i < str1.length; i += subStr.length) {
        if (str1.slice(i, i+subStr.length) !== subStr) {
            return ""
        }
    }
    for (let i = 0; i < str2.length; i += subStr.length) {
        if (str2.slice(i, i+subStr.length) !== subStr) {
            return ""
        }
    }

    return subStr;
};

const gcd = (a, b) => {
    if (b === 0) return a;
    else return gcd(b, a%b);
}