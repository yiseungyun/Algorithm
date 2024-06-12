function solution(n, t, m, p) {
    let result = '', word = '';
    let size = m*t;
    let number = 0;
    while (word.length < size) {
        word += number.toString(n).toUpperCase();
        number++;
    }
    let index = p-1, count = 0;
    while (count < t) {
        result += word[index];
        count++;
        index += m;
    }
    return result;
}