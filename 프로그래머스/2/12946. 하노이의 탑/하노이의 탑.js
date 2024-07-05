function solution(n) {
    let result = [];
    
    function move(a, b) {
        result.push([a, b]);
    }
    function hanoi(number, start, mid, dest) {
        if (number === 1) {
            move(start, dest);
            return
        }
        hanoi(number-1, start, dest, mid);
        move(start, dest);
        hanoi(number-1, mid, start, dest);
    }
    hanoi(n, 1, 2, 3);
    
    return result;
}