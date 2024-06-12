function solution(dartResult) {
    let result = 0;
    let score = [];
    let dict = {'S': 1, 'D': 2, 'T': 3};
    let option = {'1': '', '2': '', '3': ''};
    let data = '';
    
    for (let i = 0; i < dartResult.length; i++) {
        let temp = dartResult[i].replace(/[0-9]/, '');
        if (temp.length === 0) {
            data += dartResult[i];
        } else if (dartResult[i] === 'S' || dartResult[i] === 'D' || dartResult[i] === 'T') {
            score.push(data);
            data = '';
            score[score.length-1] = Number(score[score.length-1])**dict[dartResult[i]];
        } else {
            if (dartResult[i] === '*') {
                score[score.length-1] *= 2;
                if (score.length === 2) {
                    score[0] *= 2;
                } else if (score.length === 3) {
                    score[1] *= 2;
                }
                option[(score.length).toString()] = '*';
            } else {
                score[score.length-1] = score[score.length-1]*(-1);
                option[(score.length).toString()] = '#';
            }
        }
    }
    score.forEach((score) => result += score);
    return result;
}