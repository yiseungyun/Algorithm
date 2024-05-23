function solution(n) {
    var result = 0, start = 1, sum = 0;
    for (let i = 1; i <= n/2+1; i++) {
        sum += i;
        while (sum > n) {
            sum -= start;
            start++;
        }
        if (sum === n) result++;
    }
    return n/2+1 >= n ? result : result+1;
}