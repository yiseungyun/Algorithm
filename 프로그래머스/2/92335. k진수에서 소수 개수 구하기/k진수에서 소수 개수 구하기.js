function solution(n, k) {
    let result = 0;
    let number = '';
    
    while (n > k-1) {
        number += (n%k).toString();
        n = Math.floor(n/k);
    }
    number += n.toString();
    number = number.split('').reverse().join('');
    
    let number_list = number.split('0');
    for (const num of number_list) {
        if (isPrime(num)) result++;
    }
    
    return result;
}

function isPrime(string) {
    let number = string.length > 0 ? Number(string) : -1;
    if (number === -1 || number === 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}