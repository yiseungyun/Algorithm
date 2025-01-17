function solution(participant, completion) {
    let answer;
    const dict = {};
    
    for (const p of participant) {
        if (dict[p]) { // 동명이인 처리
            dict[p] += 1;
        } else {
            dict[p] = 1;
        }
    }
    
    for (const c of completion) {
        if (dict[c] === 1) {
            delete dict[c];
        } else {
            dict[c] -= 1;
        }
    }
    
    for (const d in dict) {
        answer = d;
    }
    
    return answer;
}