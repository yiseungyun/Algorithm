/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const gcdOfStrings = function(str1, str2) {
    const gcdNumber = gcd(str1.length, str2.length);
    
    const commonString = str1.slice(0, gcdNumber);
    
    for (let i = 0; i < str1.length; i += gcdNumber) {
        if (str1.slice(i, i+gcdNumber) !== commonString) {
            return "";
        }
    }

    for (let i = 0; i < str2.length; i += gcdNumber) {
        if (str2.slice(i, i+gcdNumber) !== commonString) {
            return "";
        }
    }

    return commonString;
}

const gcd = (num1, num2) => {
    let a = num1 > num2 ? num1 : num2;
    let b = num1 > num2 ? num2 : num1;
    let n;

    while (b !== 0) {
        n = a % b;
        a = b;
        b = n; 
    }

    return a;
}