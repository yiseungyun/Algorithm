function solution(clothes) {
    var result = 1;
    var cloth = {};
    for (let i = 0; i < clothes.length; i++) {
        if (cloth[clothes[i][1]]) cloth[clothes[i][1]] += 1;
        else cloth[clothes[i][1]] = 1;
    }
    for (const type in cloth) {
        result *= (cloth[type]+1);
    }
    return result-1;
}