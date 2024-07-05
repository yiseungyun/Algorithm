function solution(lottos, win_nums) {
    const my_number = {};
    let zero_count = 0, same_count = 0;
    const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
    let result = [];
    
    for (const number of lottos) {
        if (number > 0) {
            my_number[number] = 1;
        } else {
            zero_count++;
        }
    }
    for (const number of win_nums) {
        if (my_number[number]) {
            same_count++;
        }
    }
    result.push(rank[Math.min(zero_count+same_count, 6)], rank[same_count]);
    return result;
}